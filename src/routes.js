const express = require('express');
const routes = express.Router(); /*objeto routes */
const userController = require('./controllers/userControllers');

routes.post('/user',userController.persistData);

routes.get('/user',userController.listUsers);
routes.get('/userUm',userController.listaUm);
routes.get('/listaSex',userController.listaSex);
routes.get('/idadeMenor',userController.idadeMenor);

module.exports = routes; /*Exportando o routes*/