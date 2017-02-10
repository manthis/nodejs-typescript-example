
import http = require('http');
import os = require('os');
import fs = require('fs');

class HttpServer {

    nodePort: number;

    constructor (port: number) {
        this.nodePort = port;
    }

    onRequest(request: http.ServerRequest, response: http.ServerResponse) {
        console.log('New request: ' + request.url);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<html><head></head><body><h1>Hello World from Node JS!!!</h1></body></html>');
        response.end();
    }

    onStart() {
        let httpServer = http.createServer(this.onRequest);
        httpServer.listen(this.nodePort);
        console.log('Server listenning on http://' + os.hostname() +
                    ':' + this.nodePort + '/');
    }
}

let server = new HttpServer(8080).onStart();
