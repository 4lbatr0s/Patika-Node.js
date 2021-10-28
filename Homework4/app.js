const write = require('./write')
const read = require('./read')
const update = require('./update')
const deleteFile = require('./delete')


write('employee.json', {"name":"Employee 1 name", "salary":2000})
read('employee.json')
update('employee.json', {"name":"Employee 2 name", "salary":3000})
read('employee.json')
deleteFile('employee.json')