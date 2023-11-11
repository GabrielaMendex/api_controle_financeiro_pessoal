const { cadastraUsuario } = require("./cadastrarUsuario");
const { listaTransacoes } = require("./listarTransacoes");
const { removeTransacao } = require("./removeTransacao");
const { listarCategorias } = require("./listarCategorias");
const { cadastraTransacao } = require("./cadastrarTransacao");
const { fazerLogin } = require("./fazerLogin");
const { editarTransacao } = require("./editarTransacao");
const { detalharTransacao } = require("../controladores/detalharTransacao");
const { atualizarPerfilUsuario } = require("./editaPerfilUsuario");
const { obterExtrato } = require("../controladores/obterExtrato");
const { detalharPerfilUsuario } = require("../controladores/detalhaPerfilUser");

module.exports = {
  cadastraUsuario,
  listaTransacoes,
  removeTransacao,
  listarCategorias,
  cadastraTransacao,
  fazerLogin,
  editarTransacao,
  detalharTransacao,
  atualizarPerfilUsuario,
  obterExtrato,
  detalharPerfilUsuario,
};
