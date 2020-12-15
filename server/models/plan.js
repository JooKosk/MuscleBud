const mongoose = require('mongoose')

const planSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  summary: {
    goal: String,
    workoutType: { type: String, required: true },
    level: String,
    duration: { type: String, required: true },
    workoutDays: Number,
    timePerWorkout: Number,
    equipment: [
      {
        type: String,
      },
    ],
    author: { type: String, required: true },
  },
  description: { type: String, required: true },
})

planSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Plan', planSchema)
