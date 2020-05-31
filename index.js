const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
 
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

app.get(['/', '/tutorials'],
    (req, res) => {
        res.render('index');
});

app.get('/tutorials/new', (req, res) => {
    res.render('create')
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
});