const plansRouter = require('express').Router()
const Plan = require('../models/plan')

plansRouter.get('/', async (req, res) => {
  const plans = await Plan.find({})
  res.json(plans.map((p) => p.toJSON()))
})

plansRouter.post('/', async (req, res) => {
  const { body } = req

  const plan = new Plan({
    name: body.name,
    author: body.author,
    workoutType: body.workoutType,
    equipment: body.equipment,
    workoutDays: body.workoutDays,
    description: body.description,
  })
  const savedPlan = await plan.save()
  res.json(savedPlan.toJSON())
})

module.exports = plansRouter
