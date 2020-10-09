// const app = express();
// const express = require("express");
// const fs = require("fs");
// const path = require('path');
// const port = process.env.PORT || 3000;


const http = require('http');

const PORT = 8080;

function handleRequest(request, response) {
    response.end('It works! Path hit:'  + request.url);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log('server listening on: http://localhost:' + PORT);
})