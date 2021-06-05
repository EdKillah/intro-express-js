const express = require('express');

const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['cookie123zxcasdfg']    
}));

app.get('/', function(req, res){
    req.session.visits = req.session.visits || 0;
    
    req.session.visits +=1;

    res.send(`${req.session.visits} visitas(s)`);
    
});

app.listen(4000);