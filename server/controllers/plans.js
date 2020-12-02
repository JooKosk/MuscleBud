const plansRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Plan = require('../models/plan')
const User = require('../models/user')

plansRouter.get('/', async (req, res) => {
  const plans = await Plan.find({}).populate('user', { name: 1 })
  res.json(plans.map((p) => p.toJSON()))
})

plansRouter.post('/', async (req, res) => {
  const { body } = req
  const decodedToken = jwt.verify(req.token, process.env.SECRET)
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: 'invalid or missing token' })
  }
  const user = await User.findById(decodedToken.id)

  const plan = new Plan({
    name: body.name,
    user: user._id,
    workoutType: body.workoutType,
    equipment: body.equipment,
    workoutDays: body.workoutDays,
    description: body.description,
  })
  const savedPlan = await plan.save()
  user.plans = user.plans.concat(savedPlan._id)
  await user.save()

  res.json(savedPlan.toJSON())
})

module.exports = plansRouter
