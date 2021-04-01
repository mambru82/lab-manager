const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({ email: email }, (err, user) => {
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