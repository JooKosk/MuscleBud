const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
  duration: { type: String, required: true },
  description: { type: String },
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

workoutSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Workout', workoutSchema)
