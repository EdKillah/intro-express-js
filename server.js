const http = require('http');


function responderPeticion(request, response){
    response.end("Hello World!");
}

const server = http.createServer(responderPeticion);

server.listen(4000);


