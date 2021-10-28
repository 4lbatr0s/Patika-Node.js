const fs = require('fs')

const write = (filename,data) =>{
    fs.writeFile(filename, JSON.stringify(data) , (err)=>{
        if(err) console.log(err)
    })
}

module.exports = write