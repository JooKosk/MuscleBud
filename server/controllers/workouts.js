const workoutsRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Workout = require('../models/workout')
const User = require('../models/user')
const Comment = require('../models/comment')

workoutsRouter.get('/', async (req, res) => {
  const workouts = await Workout.find({})
    .populate('user', { username: 1 })
    .populate({
      path: 'comments',
      populate: { path: 'user', model: 'User' },
    })
  res.json(workouts.map((w) => w.toJSON()))
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
    likes: body.likes,
    user: user._id,
  })

  const savedWorkout = await workout.save()
  user.workouts = user.workouts.concat(savedWorkout._id)
  await user.save()

  res.json(savedWorkout.toJSON())
})

workoutsRouter.post('/:id/comments', async (req, res) => {
  const commentOwner = await User.findOne({ username: req.body.user.username })
  const comment = new Comment({
    content: req.body.content,
    user: commentOwner,
    date: new Date(),
  })
  const workoutToComment = await Workout.findById(req.params.id)

  const savedComment = await comment.save()
  workoutToComment.comments = workoutToComment.comments.concat(savedComment._id)
  await workoutToComment.save()

  res.json(savedComment.toJSON())
})

workoutsRouter.put('/:id', async (req, res) => {
  const workout = {
    likes: req.body.likes,
  }

  const updatedWorkout = await Workout.findByIdAndUpdate(
    req.params.id,
    workout,
    {
      new: true,
    }
  )
  res.json(updatedWorkout)
})

workoutsRouter.delete('/:id', async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET)
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: 'invalid or missing token' })
  }
  const workout = await Workout.findById(req.params.id)
  const user = await User.findById(decodedToken.id)

  if (workout.user.toString() === user._id.toString()) {
    await Workout.findByIdAndDelete(req.params.id)
    return res.status(204).end()
  }
})

module.exports = workoutsRouter
