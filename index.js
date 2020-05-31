const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");

const createTutorialController = require('./controllers/createTutorial')
const homePageController = require('./controllers/homePage')
const storeTutorialController = require('./controllers/storeTutorial')
const getTutorialController = require('./controllers/getTutorial')

const Tutorials = require('./database/models/Tutorials');
 
const app = new express();

mongoose.connect('mongodb://localhost:27017/mydb', { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err));
 
app.use(fileUpload());
app.use(express.static('public'));
app.use(expressEdge.engine);
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

const storeTutorial = require('./middleware/storeTutorial')
app.use('/tutorials/store', storeTutorial)

app.get(["/", "/tutorials"], 
    homePageController
);
app.get("/tutorials/:id", getTutorialController);
app.get("/tutorials/new", createTutorialController);
app.post("/tutorials/store", storeTutorialController);

app.listen(4000, () => {
    console.log('App listening on port 4000')
});