const express = require('express');
const router = express.Router({ mergeParams:true });

/* GET reviews page /posts/:id/reviews. */
router.get('/', (req, res, next) => {
	res.send('INDEX /posts/:id/reviews');
}); 

/* GET reviews page /reviews/:reviews_id/edit. */
router.get('/', (req, res, next) => {
	res.send('EDIT /posts/:id/reviews/:reviews_id/edit');
});

/* POST reviews page /reviews. */
router.post('/', (req, res, next) => {
	res.send('CREATE /posts/:id/reviews');
}); 

/* PUT Update reviews page /reviews/:reviews_id. */
router.put('/:reviews_id', (req, res, next) => {
	res.send('UPDATE /posts/:id/reviews/:reviews_id');
});

/* DELETE Delete reviews page /reviews/:reviews_id. */
router.delete('/:reviews_id', (req, res, next) => {
	res.send('DELETED /posts/:id/reviews/:reviews_id');
});

module.exports = router;
