const express = require('express')
require('express-async-errors')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const plansRouter = require('./server/controllers/plans')
const config = require('./server/utils/config')
const logger = require('./server/utils/logger')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
app.use(cors())
app.use(express.json())

app.use('/api/plans', plansRouter)

module.exports = app
