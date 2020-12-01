const express = require('express')
const app = express()
const passport = require('passport');
require('./passport');
const cookieSession = require('cookie-session')
const isLoggedIn = require('./Middleware/auth')

app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());
app.get('/auth', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/error', (req, res) => res.send('Unknown Error'))
app.get('/api/account/google', passport.authenticate('google', { failureRedirect: '/auth/error' }),
  function(req, res) {
    res.redirect('/');
  }
);

// 처음 접속 경로 (localhost:3000/)로 접속했을 때 login이 되어있는지 확인
app.get('/', isLoggedIn,(req, res) => res.send(`Welcome ${req.user.displayName} ${req.user.emails[0]['value']} !`))
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/auth');
})
app.listen(3000,()=>{
  console.log('Serve is up and running at the port 3000')
})