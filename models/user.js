const mongose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongose.Schema;

const UserSchema = new Schema({
    email: String,
    image: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongose.model('User', UserSchema);