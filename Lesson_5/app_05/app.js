const fs=require('fs');
const http=require('http');
const PORT=3500;
http.createServer(function(req,res){
    const url = req.url;
    console.log(url);
   
    switch (url) {
        case '/':
            console.log('main page');
            res.write('<h1>главная страница</h1>');
            res.end();
        break;    
        case '/contact':
            

            console.log('contact page');
            res.write(fs.readFileSync('./public/contact.html'));
            res.end();
        break;    
          
        default:
            if (url.includes('/images')) {
                
                console.log('картинка');
                fs.readFile('./public/'+url, {}, function(error,data){
                    if (error) {

                    }
                    console.log('=======get======');
                    res.setHeader('Content-type','image/png');
                    res.write(data);
                    res.end();
                });
                
            } else {
                console.log('404');
                res.write('<h1>404</h1>');
            }
            
            break;
    }
   
}).listen(PORT);