const http =require('http');
const fs = require('fs');
const path=require('path');
const url=require('url');

const PORT=3500;

const mimeTypes= {
    '.html' : 'text/html',
    '.htm' : 'text/html',
    '.jpg' : 'image/jpg',
    '.jpeg' : 'image/jpg',
    '.css' : 'text/css',
    '.json' : 'applicaton/json',
    '.js' : 'text/javascript',
}

const users=require('./users');

function staticFile (res,filePath,ext) {
    res.setHeader("Content-Type",mimeTypes[ext]);
    fs.readFile('./public'+filePath, (error,data) => {
        if (error)
        {
            res.statusCode = 404;
            res.end();

        }
        res.end(data);

    });
}

http.createServer(function(req,res){
    let url = req.url;
    console.log(url);

     

    switch(url) {
        case '/':
            console.log('main page');
            staticFile(res,'/html/index.html','.html');
        break;    
        default:
            const extname = String(path.extname(url)).toLocaleLowerCase();
            if (extname in mimeTypes) staticFile(res, url, extname);
            else {
                res.statusCode=404;
                res.end();
            }
    }
}).listen(PORT);