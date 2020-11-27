require('dotenv').config()

const http = require('http')
const app = require('./app')
const config = require('./server/utils/config')
const logger = require('./server/utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () =>
  logger.info(`Server running on port ${config.PORT}`)
)
