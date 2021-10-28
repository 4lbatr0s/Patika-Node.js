const http = require('http')

//first step is to create our web server.

const patikaServer = http.createServer((req,res)=>{
    //then to catch our endpoints.
    const url = req.url
    //then to send our responses depending on the request endpoints.
    if(url == '/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h2>WELCOME TO THE INDEX PAGE</h2>')
    } else if (url == '/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h2>WELCOME TO THE ABOUT PAGE</h2>')
    } else if (url == '/contact') {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h2>WELCOME TO THE CONTACT PAGE</h2>')
    } else {
        res.writeHead(400, {'Content-Type':'text/html'})
        res.write('<h2>404 NOT FOUND</h2>')
    }
})

//in order to listen to our web server, we must have a port number.

const port = 5000

//finally, we have to listen to our server.

patikaServer.listen(port, ()=>{
    console.log(`Patika server is being listened to port:${port}`)
})