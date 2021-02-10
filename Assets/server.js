const http = require('http');
const fs = require('fs');
//const express = require("express");
//const app = express();

const PORT = 3000;

function handleRequest(request, response) {
    response.end(`It works!! ${request.url}`);
}

<<<<<<< HEAD
let path = request.url
=======
let path = request.url;

switch(path) {
    case '/':
        return fs.readFile(__dirname + '/index.html', function(err, data) {
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
    })
    case '/make':
        return fs.readFile(__dirname + '/index.html', function(err, data) {
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
    })
    case '/view':
        return fs.readFile(__dirname + '/index.html', function(err, data) {
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
    })
}
>>>>>>> f491c81ef0cff115a5a0bf546148bbdd1449b232

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log(`Server is listening on http://localhost:${PORT}`)
});

