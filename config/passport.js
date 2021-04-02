const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./connection');
const Tech = connection.models.Tech;

passport.use(new LocalStrategy(
  function(username, password, done) {
    Tech.findOne({ username: username }, (err, tech) => {
      if (err) { return done(err); }
      if (!tech) {
        return done(null, false, { message: 'Tech not found!' });
      }
      if (!tech.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password!' });
      }
      return done(null, tech);
    });
  }
));