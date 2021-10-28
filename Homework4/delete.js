const fs = require('fs')


const deleteFile = (filename) =>{
    fs.unlink(filename, (err)=>{
        if(err) console.log(err)
    })
}

module.exports = deleteFile