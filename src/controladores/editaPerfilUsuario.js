const bcrypt = require('bcrypt');
const pool = require('../bancodedados/conexao');
const {verificaEmailExistente} = require('../funcoes/funcoes')

const atualizarPerfilUsuario = async (req, res) => {
  try {
    const userId = req.usuario.id;
    console.log(userId);
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    const emailExistente = await verificaEmailExistente(email);

    if (emailExistente) {
      return res.status(400).json({ mensagem:'O e-mail informado já está sendo utilizado por outro usuário.'});
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const query = {
      text: 'UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4',
      values: [nome, email, senhaCriptografada, userId],
    };

    await pool.query(query);

    res.status(204).send();
  } catch (error) {
    res.status(500).json();
  }
};

module.exports = { atualizarPerfilUsuario };