const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
  const { body } = req
  console.log(body)
  const user = await User.findOne({ username: body.username })
  console.log(user)
  const correctPassword =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && correctPassword)) {
    res.status(401).json({
      error: 'invalid username or password',
    })
  }

  const tokenUser = {
    username: user.username,
    // eslint-disable-next-line no-underscore-dangle
    id: user._id,
  }

  const token = jwt.sign(tokenUser, process.env.SECRET)

  res.status(200).send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter
