const router = require('express').Router();
const passport = require('passport');

router.get('/login/success', (req, res) => {
  console.log({ headers: req.headers });
  if (req.user) {
    res.set('Access-Control-Allow-Origin', '*');
    console.log('The user is found and sent');
    return res.status(200).json({
      error: false,
      message: 'Login Successful',
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: 'Not Authorized' });
  }
});
router.get('/login/failed', (req, res) => {
  res.status(401).json({ error: true, message: 'Login Failure' });
});
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: `${process.env.SERVER_URL}auth/login/success`,
    failureRedirect: '/login/failed',
  })
);

router.get('/google', passport.authenticate('google', ['profile', 'email']));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
