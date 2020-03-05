const mongose = require('mongoose');
const Schema = mongose.Schema;

const PostSchema = new Schema({
    title: String,
    price: String,
    description: String,
    images: [ { url: String, public_id: String } ],
    location: String,
    lat: Number,
    lng: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

module.exports = mongose.model('Post', PostSchema);