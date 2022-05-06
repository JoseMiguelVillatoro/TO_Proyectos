const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hola Mundo! :D Prueba 2')
  })


app.listen(3000)