const bcrypt = require('bcrypt')
const User = require('../database/models/User')
 
module.exports = (req, res) => {
    const {
        email,
        password
    } = req.body;
    // try to find the user
    User.findOne({
        email
    }, (error, user) => {
        if (user) {
            // compare passwords.
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    // store user session.
                    res.redirect('/')
                } else {
                    res.redirect('/login')
                }
            })
        } else {
            return res.redirect('/login')
        }
    })
}