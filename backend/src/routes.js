const express = require('express');
const routes = express.Router();


const SessionController = require('./controllers/SessionController');
routes.post('/sessions', SessionController.create);

const OngController = require('./controllers/OngController');
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

const IncidentController = require('./controllers/IncidentController');
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


const ProfileController = require('./controllers/ProfileController');
routes.get('/profile', ProfileController.index);

module.exports = routes;


/*
    Está parte do código contém:
    - Request: Requisições a Página.
    - Response: Respostas para a Página.

    Métodos HTTP
    - GET: Buscar uma Informação do Back-End.
    - POST: Criar uma Informação no Back-End.
    - PUT: Alterar uma Informação no Back-End.
    - DELETE: Deletar uma Informação no Back-End.

    Tipos de Parâmetros
    - Query Params: Parâmetros nomeados/enviados na rota após "?" (Filtros, Paginação...)
    - Route Params: Parâmetros utilizados para identificar recursos.
    - Request Body: Corpo da Requisição, utilizado para alterar ou criar recursos.


    Driver - SELECT * FROM users;
    Query Builder: table('users).select('*').where();
    //Aqui usa o Knex, baixar com npm
    npm install knex
    npx knex init
    http://knexjs.org/#Installation-migrations
*/