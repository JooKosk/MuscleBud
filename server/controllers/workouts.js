const workoutsRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Workout = require('../models/workout')
const User = require('../models/user')

workoutsRouter.get('/', async (req, res) => {
  const plans = await Workout.find({}).populate('user', { name: 1 })
  res.json(plans.map((p) => p.toJSON()))
})

workoutsRouter.post('/', async (req, res) => {
  const { body } = req
  const decodedToken = jwt.verify(req.token, process.env.SECRET)
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: 'invalid or missing token' })
  }
  const user = await User.findById(decodedToken.id)

  const workout = new Workout({
    name: body.workoutName,
    type: body.workoutType,
    date: new Date(),
    duration: body.duration,
    description: body.description,
    user: user._id,
  })

  const savedWorkout = await workout.save()
  user.workouts = user.workouts.concat(savedWorkout._id)
  await user.save()

  res.json(savedWorkout.toJSON())
})

module.exports = workoutsRouter
