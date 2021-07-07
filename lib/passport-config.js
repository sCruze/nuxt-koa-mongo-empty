const { Strategy, ExtractJwt } = require('passport-jwt')
const keys = require('../server/keys')

const User = require('../server/models/user.model')

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: keys.JWT
}

module.exports = (passport) => {
  passport.use(new Strategy(opts, async (payload, done) => {
    const user = await User.findById(payload.id)

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  }))
}
