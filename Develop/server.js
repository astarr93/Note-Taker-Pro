const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
})

function handleRequest(req, res) {
    res.end("It worked!" + req.url);
}

