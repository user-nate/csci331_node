// server.js
const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js!</h1>");
    response.write("<h2>Nathan Sheffels - j67q156, Node.js!</h2> \
    <p>Running node server on port 5003</p> \
    <p>My repo for this project: <a href='https://github.com/user-nate/csci331_node'>GitHub</a></p> \
    <p>The repo for my mern 2 project...I have implemented the two components but I could not get the project live on my port :/ <a href='https://github.com/user-nate/mern2'>GitHub</a> </p>");
     response.end();
}).listen(5003);
