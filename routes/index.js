const express = require('express');
//const passport = require('passport');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers');
const { asyncErrorHandler } = require('../middleware');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET register page /register. */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST register page /register. */
router.post('/register', asyncErrorHandler(postRegister));

/* GET login page /login. */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST login page /login. */
router.post('/login', postLogin);

/* GET Logout page /logout */
router.get('/logout', getLogout );

/* POST register page. */
router.post('/register', (req, res, next) => {
  res.send('POST -> /register');
});

/* GET profile page. */
router.get('/profile', (req, res, next) => {
  res.send('GET -> /profile');
});

/* PUT profile/:user_id page. */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT -> /profile/:user_id');
});

/* GET forgot page. */
router.get('/forgot', (req, res, next) => {
  res.send('GET -> /forgot');
});

/* PUT forgot page /forgot. */
router.put('/forgot', (req, res, next) => {
  res.send('PUT -> /forgot');
});

/* GET reset/:token page. */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET -> /reset/:token');
});

/* PUT reset/:token page. */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT -> /reset/:token');
})

module.exports = router;
