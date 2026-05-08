

const http=require("http");
const fs=require("fs");
const server = http.createServer((req,res)=>
{
    res.writeHead(200, { "Content-Type": "text/html" } );
    if(req.url === "/home")
    {
        res.write(fs.readFileSync("home.html","utf-8"));
    }
    else if (req.url==="/contact"){
        res.write(fs.readFileSync("contact.html","utf-8"));
    }
    else if(req.url==="/about"){
        res.write(fs.readFileSync("about.html","utf-8"));
    }
    else{
        res.write("<h1>404 page not found</h1>");
    }
    res.end();
});
server.listen(3000,()=>{
    console.log("server running at port 3000");
}
)