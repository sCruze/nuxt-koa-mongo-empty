// Экспортируем все handler в массив
const passportInit = require('./passport-init')
const bodyParser = require('./body-parser')
const errors = require('./errors')

module.exports = [
  passportInit,
  bodyParser,
  errors
]
