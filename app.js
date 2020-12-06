const express = require('express')
require('express-async-errors')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const plansRouter = require('./server/controllers/plans')
const workoutsRouter = require('./server/controllers/workouts')
const usersRouter = require('./server/controllers/users')
const config = require('./server/utils/config')
const logger = require('./server/utils/logger')
const loginRouter = require('./server/controllers/login')
const helperWare = require('./server/utils/helper')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
app.use(cors())
app.use(express.json())

app.use(helperWare.tokenGetter)

app.use('/api/login', loginRouter)
app.use('/api/plans', plansRouter)
app.use('/api/workouts', workoutsRouter)
app.use('/api/users', usersRouter)

app.use(helperWare.errorHandler)

module.exports = app
