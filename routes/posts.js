const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ 'dest': 'uploads/'});
const { asyncErrorHandler } = require('../middleware');
const { 
	postIndex, 
	postNew, 
	postCreate,
	postEdit,
	postShow,
	postUpdate,
	postDestroy 
} = require('../controllers/posts');


/* GET posts page /posts. */
router.get('/', asyncErrorHandler(postIndex)); 

/* GET posts new page /posts/new. */
router.get('/new', postNew); 

/* GET posts page /posts/:id. */
router.get('/:id', asyncErrorHandler(postShow));

/* GET posts page /posts/:id/edit. */
router.get('/:id/edit', asyncErrorHandler(postEdit));

/* POST posts page /posts. */
router.post('/', upload.array('images', 4), asyncErrorHandler(postCreate)); 

/* PUT Update posts page /posts/:id. */
router.put('/:id', 	asyncErrorHandler(postUpdate));

/* DELETE Delete posts page /posts/:id. */
router.delete('/:id', asyncErrorHandler(postDestroy));

module.exports = router;
