/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose')

const planSchema = mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  workoutType: String,
  equipment: [
    {
      type: String,
    },
  ],
  workoutDays: Number,
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