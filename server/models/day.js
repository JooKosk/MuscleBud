const mongoose = require('mongoose')

const daySchema = mongoose.Schema({
  dayNumber: Number,
  targetMuscles: { type: String, required: true },
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
})

daySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Day', daySchema)
