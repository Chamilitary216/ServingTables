const http = require('http');
const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

function handleRequest(request, response) {
    response.end(`It works!! ${request.url}`);
}

let path = request.url;

switch(path) {
    case '/'
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log(`Server is listening on http://localhost:${PORT}`)
});
