//Importando o framework express
const express = require('express');
const cors = require('cors');

//Importando Rotas
const routes = require('./routes');

//Iniciando a aplicação
const app = express();

app.use(cors()); //origin, procurar saber
app.use(express.json());
app.use(routes);

//Porta que a aplicação será Utilizada
app.listen(3333);