const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dlwnghks1541:icaruss77%40@boilerplate.66tvczv.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('연결 성공'))
  .catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World! 일하기 싫다')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})