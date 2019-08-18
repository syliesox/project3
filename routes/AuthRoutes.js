const passport = require('passport');
const production  = 'https://retirement-calculator-24.herokuapp.com';
const development = 'http://localhost:3000';
const url = (process.env.NODE_ENV ? production : development);

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect(url)
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect(url);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};