var pug=require('pug'); // using pug through npm install
var html = pug.renderFile('sample.pug', {name:"toshik"}); 
var http=require('http');

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'}); //setting up headers

res.end(html); //displaying in html body

}).listen(1331,'127.0.0.1');