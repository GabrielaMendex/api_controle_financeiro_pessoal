const pool = require('../bancodedados/conexao');
const bcrypt = require('bcrypt');
const {verificaEmailExistente} = require('../funcoes/funcoes');

const cadastraUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ messagem: 'Os campos são obrigatórios'});
  }

  try {
    const emailExistente = await verificaEmailExistente(email);

    if (emailExistente) {
      return res.status(400).json({ mensagem:'Já existe usuário cadastrado com o e-mail informado.'});
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const query =
      'insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *';
    const { rows } = await pool.query(query, [nome, email, senhaCriptografada]);

    const novoUsuarioCadastrado = {
      id: rows[0].id,
      nome: rows[0].nome,
      email: rows[0].email
    }

    res.status(201).json(novoUsuarioCadastrado);
  } catch (error) {
    return res.status(500).json({ messagem: 'error interno no servidor' });
  }
};

module.exports = {
  cadastraUsuario,
}
