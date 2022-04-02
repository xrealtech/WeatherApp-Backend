const fs = require('fs')

fs.readFile('test-data-lightning', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
