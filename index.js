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

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/posts/new', (req, res) => {
    res.render('create')
});
 
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});
 
app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
});