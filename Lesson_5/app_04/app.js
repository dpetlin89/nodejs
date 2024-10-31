const fs=require('fs');
const http=require('http');
const PORT=3500;
http.createServer(function(req,res){
    const url = req.url;
    console.log(url);
    res.setHeader('Content-type','text/html; charset=utf-8');
    switch (url) {
        case '/':
            console.log('main page');
            res.write('<h1>главная страница</h1>');
        break;    
        case '/contact':
            

            console.log('contact page');
            res.write(fs.readFileSync('./contact.html'));
        break;    
          
        default:
            console.log('404');
            res.write('<h1>404</h1>');
            break;
    }
    res.end();
}).listen(PORT);