const { Router } = require('express');

const { validaToken } = require('../intermediarios/validaToken');

const controladores = require('../controladores');

const rotas = Router();

rotas.post('/usuario', controladores.cadastraUsuario);
rotas.post('/login', controladores.fazerLogin);
rotas.get('/', async (req, res) => {return res.json('Api está ok :)')});

rotas.use(validaToken);

rotas.get('/categoria', controladores.listarCategorias);
rotas.get('/transacao', controladores.listaTransacoes);
rotas.delete('/transacao/:id', controladores.removeTransacao);
rotas.post('/transacao', controladores.cadastraTransacao);
rotas.get('/transacao/extrato', controladores.obterExtrato);
rotas.get('/transacao/:id', controladores.detalharTransacao);
rotas.get('/usuario', controladores.detalharPerfilUsuario);
rotas.put('/usuario', controladores.atualizarPerfilUsuario);
rotas.put('/transacao/:id', controladores.editarTransacao);

module.exports = rotas;
