const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//bodyParser esta deprecado
app.use( bodyParser.urlencoded({extended: true}) );

app.get('/', function(request, response){
    response.send("Hello world from express.");
});

app.get('/saludo', function(req, res){
    res.send(`Hello ${req.query.name}, greetings from express.`);
});

app.post('/', function(req, res){
    res.send(`Hello ${req.body.name}! this is from post.`);
});

app.listen(4000);