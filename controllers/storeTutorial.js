const path = require('path')
const Tutorials = require('../database/models/Tutorials')
 
module.exports = (req, res) => {
    const {
        image
    } = req.files
 
    image.mv(path.resolve(__dirname, '..', 'public/tutorials/images', image.name), (error) => {
        Tutorials.create({
            ...req.body,
            image: `/tutorials/images/${image.name}`
        }, (error, post) => {
            res.redirect("/");
        });
    })
}