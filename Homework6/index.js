const express = require('express') //requirement of express

const app = express()//assign express function to app variable.

app.get('/', (req,res)=>{
    res.status(200).send('Hello World')
})
app.get('/about', (req,res)=>{
    res.status(200).send('Hello World')
})
app.get('/contact', (req,res)=>{
    res.status(200).send('Hello World')
})
//out of request above.
app.get('*', (req,res)=>{
    res.status(404).send('404 NOT FOUND')
})

const port = 3000

app.listen(port, ()=> {
    console.log(`Web server started on port:${port}`)
})