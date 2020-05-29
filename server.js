const express = require('express'); /*crio uma classe e chamo o express, importação do modulo express*/
const server = express(); /*Cria o objeto server da classe express*/
const mongoose = require('mongoose') /*importando pacotes */
const requireDir = require('require-dir');

//banco de dados - conexão
mongoose.connect('mongodb+srv://brunopazitto:admin@cluster0-esdzh.mongodb.net/cursoReact?retryWrites=true&w=majority',{useNewUrlParser : true, useUnifiedTopology : true});

//ImportModels
requireDir('./src/models');

//Config
server.use(express.json());

//routes
server.use('/api',require('./src/routes'));/*chamando o routes*/

server.listen(3002); /*informa que o servidor está ouvindo nesta porta*/
console.log('Servidor escutando na porta 3002');