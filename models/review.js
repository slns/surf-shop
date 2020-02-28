const mongose = require('mongoose');
const Schema = mongose.Schema;

const ReviewSchema = new Schema({
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongose.model('Review', ReviewSchema);