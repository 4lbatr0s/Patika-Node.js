const fs = require('fs')

const read = (filename) =>{
    fs.readFile(filename, 'utf8', (err,data)=>{
        if(err) console.log(err)
        console.log(data)
    })
}

module.exports = read