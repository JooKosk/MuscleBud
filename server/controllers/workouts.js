const workoutsRouter = require('express').Router()
const Workout = require('../models/workout')

workoutsRouter.get('/', async (req, res) => {
  const plans = await Workout.find({})
  res.json(plans.map((p) => p.toJSON()))
})

workoutsRouter.post('/', async (req, res) => {
  const { body } = req
  // implement user field
  const workout = new Workout({
    name: body.name,
    description: body.description,
    date: body.date,
  })
  const savedPlan = await workout.save()
  res.json(savedPlan.toJSON())
})

module.exports = workoutsRouter
