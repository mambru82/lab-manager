const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'User not found!' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password!' });
      }
      return done(null, user);
    });
  }
));