const http=require('http');
const fs=require('fs');
const path=require('path');
const PORT = 3500;

const mimeTypes= {
    '.html' : 'text/html',
    '.htm' : 'text/html',
    '.jpg' : 'image/jpg',
    '.jpeg' : 'image/jpg',
    '.css' : 'text/css',
    '.json' : 'applicaton/json',
    '.js' : 'text/javascript',
}


http.createServer(function(req,res){
    const url=req.url;
    console.log(url);

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

    switch (url) {
        case '/contact':
        console.log('contact page');
        staticFile(res,'/contact.html','.html');
        break;  
        default:
            const extname=String(path.extname(url)).toLowerCase();
            if (extname in mimeTypes) {
                staticFile(res,url,extname);
            } else {
                res.statusCode = 404;
                res.end();
            }
        break;    

    }

}).listen(PORT);