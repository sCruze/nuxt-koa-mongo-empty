const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  login: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLengthL: 6
  },
  rights: {
    type: String,
    default: 'user',
    required: true
  },
  registration_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('users', userSchema)
