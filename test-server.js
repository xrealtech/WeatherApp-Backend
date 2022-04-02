//open file and read data from the same

const fs = require('fs')

fs.readFile('testdata', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})