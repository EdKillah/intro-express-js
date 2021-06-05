const express = require('express');

//ejecución del servidor
const app = express();

//motor de vista
app.set('view engine', 'ejs');

//ruta donde se buscaran los recursos estaticos
app.use('/public', express.static('assets')); //middleware


//mapeador de rutas
app.get('/',function(req,res){
    //como ahora se usa motor de vistas se pueden renderizar
    //pasamos el nombre de la vista .ejs que queremos correr.    
    res.render('index');
    /*
    res.sendFile('index.html', {
        root: __dirname
    });
    */
});

//puerto en el que corre el servicio
app.listen(4000);