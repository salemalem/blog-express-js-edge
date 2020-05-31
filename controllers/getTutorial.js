const Tutorials = require('../database/models/Tutorials')
 
module.exports = async (req, res) => {
    const tutorial = await Tutorials.findById(req.params.id);
    res.render("tutorial", {
        tutorial
    });
}