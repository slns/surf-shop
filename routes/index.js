const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers/index');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET register page /register. */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST register page /register. */
router.post('/register', postRegister);

/* GET login page /login. */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST login page /login. */
router.post('/login', (req, res, next) => {
  res.send('POST /login');
});

/* GET profile page /profile. */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT profile page /profile/:user_id. */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});

/* GET forgot-password page /forgot-password. */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* PUT forgot-password page /forgot-password. */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET reset-password page /reset-password/:token. */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* PUT reset-password page /reset-password/:token. */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;
