const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "519684726036-tj9fqobp9h04r69vke7hm9b8qgclftem.apps.googleusercontent.com",
    clientSecret: "Ba5dvcZUBpMKMhQQpgNJCSNt",
    callbackURL: "http://localhost:3000/api/account/google"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));