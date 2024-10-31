const http = require('http');

// LocalHost:3500
//request, response
http.createServer(function(req, res){
    console.log(req.url);
    console.log(req.method);
    console.log('server work');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1 style="text-align: center;">привет</h1>')
    res.write('<h1 style="text-align: center;">привет</h1>');
    res.end();
}).listen(3500);
