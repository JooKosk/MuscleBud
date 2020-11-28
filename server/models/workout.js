/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose')
// implement user field
const workoutSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

workoutSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Workout', workoutSchema)
