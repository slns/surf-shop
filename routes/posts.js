const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware');
const { 
	getPosts, 
	newPost, 
	createPost,
	editPost,
	showPost 
} = require('../controllers/posts');


/* GET posts page /posts. */
router.get('/', errorHandler(getPosts)); 

/* GET posts new page /posts/new. */
router.get('/new', newPost); 

/* GET posts page /posts/:id. */
router.get('/:id', errorHandler(showPost));

/* GET posts page /posts/:id/edit. */
router.get('/:id/edit', errorHandler(editPost));

/* POST posts page /posts. */
router.post('/', errorHandler(createPost)); 

/* PUT Update posts page /posts/:id. */
router.put('/:id', 	errorHandler(editPost));

/* DELETE Delete posts page /posts/:id. */
router.delete('/:id', (req, res, next) => {
	res.send('DELETED /posts/:id');
});

module.exports = router;
