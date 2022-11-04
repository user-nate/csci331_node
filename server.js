// server.js
const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js!</h1>");
    response.write("<h2>Nathan Sheffels - j67q156, Node.js!</h2> \
    <p>Running node server on port 5003</p> \
    <p>My repo: <a href='https://github.com/user-nate/csci331_node'>GitHub</a></p>");
    response.end();
}).listen(5003);
