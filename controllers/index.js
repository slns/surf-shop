const User = require('../models/user');

module.exports = {
   async postRegister(req, res, next) {
        console.log('Registering user');
        const newUser = new User({
            username: req.body.username,
            email:    req.body.email,
            image:    req.body.image
        });
        try {
            await User.register(newUser, req.body.password);
            res.redirect('/');
        } catch (error) {
            return next(error);
        }      
    }
};