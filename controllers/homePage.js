const Tutorials = require('../database/models/Tutorials')
 
module.exports = async (req, res) => {
    const tutorials = await Tutorials.find({});
 
    res.render("index", {
        tutorials
    });
}