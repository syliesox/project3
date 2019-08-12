const passport = require('passport');
const PORT = 3000;

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('http://localhost:' + PORT)
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:' + PORT);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

// localhost:5000/api/logout