const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Tech } = require('../models/Tech')

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('in passport')
    Tech.findOne({ username: username }, (err, tech) => {
      if (err) { return done(err); }
      if (!tech) {
        return done(null, false, { message: 'Tech not found!' });
      }
      if (!tech.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password!' });
      }
      return done(null, tech);
    });
  }
));

// used to serialize the user for the session
passport.serializeUser(function(tech, done) {
  done(null, tech.id);
})

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  Tech.findById(id, function(err, tech) {
    done(err, tech);
  });
});

module.exports = passport;