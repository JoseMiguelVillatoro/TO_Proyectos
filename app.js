const express = require('express')
const app = express()


//Para traer el formuladio
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hola Mundo! :D')
  })


  app.post('/imagen', upload.single('imagen'), function(req,res){
    const body = req.body
    const imagen = req.file

    console.log(imagen)
    res.send('Hola Mundo desde el Post de Imagen')
})

app.listen(3000)