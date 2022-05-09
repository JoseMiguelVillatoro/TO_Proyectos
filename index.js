const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT,() => console.log("Servidor esta en otro puerto ${PORT}"))



//app.use(express.json())
//app.get('/', function (req, res) {
//   res.send('Hola Mundo! :D Prueba 2')
//  })
//app.listen(3000)