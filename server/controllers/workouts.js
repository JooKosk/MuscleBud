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
    name: body.name,
    description: body.description,
    date: new Date(),
    // eslint-disable-next-line no-underscore-dangle
    user: user._id,
  })

  const savedWorkout = await workout.save()
  // eslint-disable-next-line no-underscore-dangle
  user.workouts = user.workouts.concat(savedWorkout._id)
  await user.save()

  res.json(savedWorkout.toJSON())
})

module.exports = workoutsRouter
