const mongoose = require('mongoose');
 
const TutorialsSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    username: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});
 
const Tutorials = mongoose.model('Tutorials', TutorialsSchema, 'tutorials');
 
module.exports = Tutorials;