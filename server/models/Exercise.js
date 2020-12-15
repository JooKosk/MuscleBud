const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
  name: String,
  sets: Number,
  reps: Number,
})

exerciseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Exercise', exerciseSchema)
