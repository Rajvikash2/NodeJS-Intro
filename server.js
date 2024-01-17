const http =require('http');
const fs = require('fs');
// To create a server
const server = http.createServer((req,res)=>{
console.log(req.url,req.method);

// set header content type
res.setHeader('Content-type','text/html');
//sending  a html file
fs.readFile('./views/index.html/',(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        res.write(data);
        res.end();
    }
})

});

//To watch or listen to the browser or a port
server.listen(3000,'localhost',()=>{
    console.log("listening for req on port 3000");
})