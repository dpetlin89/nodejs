const http = require('http');

// LocalHost:3500
//request, response
http.createServer(function(req, res){
    console.log('server work');
    res.end('<html><head><meta charset="utf-8"></head><body><h1 style="text-align: center;">привет</h1></body></html>');
}).listen(3500);
