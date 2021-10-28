const fs = require('fs')

const update = (filename, data) => {
    fs.appendFile(filename, JSON.stringify(data), (err)=>{
        console.log(err)
    })
}

module.exports = update