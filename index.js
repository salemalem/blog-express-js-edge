const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Tutorials = require('./database/models/Tutorials');
 
const app = new express();

mongoose.connect('mongodb://localhost:27017/mydb', { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err));
 
app.use(express.static('public'));
app.use(expressEdge.engine);
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get(['/', '/tutorials'],
    async (req, res) => {
        const tutorials = await Tutorials.find({})
        res.render('index', {
            tutorials
        })
});

app.get('/tutorials/new', (req, res) => {
    res.render('create')
});

app.post('/tutorials/store', (req, res) => {
    Tutorials.create(req.body, (error, post) => {
        res.redirect('/')
    })
});

app.get('/tutorials/:id', async (req, res) => {
    const tutorial = await Tutorials.findById(req.params.id)
    res.render('tutorial', {
        tutorial
    })
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
});