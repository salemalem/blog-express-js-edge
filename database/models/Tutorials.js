const mongoose = require('mongoose');
 
const TutorialsSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String
});
 
const Tutorials = mongoose.model('Tutorials', TutorialsSchema, 'tutorials');
 
module.exports = Tutorials;