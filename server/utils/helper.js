const logger = require('./logger')

const errorHandler = (error, req, res, next) => {
  logger.error(error.message)

  if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' })
  }
  next(error)
}

const tokenGetter = (req, res, next) => {
  const authorization = req.get('authorization')
  req.token = null
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7)
  }
  next()
}

module.exports = {
  errorHandler,
  tokenGetter,
}
