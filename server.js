const bodyParser = require('body-parser') //Instância do body-parse
const express = require('express') //Instância do express
const app = express() //Atribuindo o express a uma const app

app.use(express.static('.')) //Garante o express ao arquivos estáticos no projeto
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(8080, () => console.log('Executando...')) //Porta onde o servidor está sendo executado