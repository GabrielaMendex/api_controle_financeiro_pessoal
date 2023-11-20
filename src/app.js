require('dotenv').config();
const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3000, () => console.log('server rodando na porta 3000'));
