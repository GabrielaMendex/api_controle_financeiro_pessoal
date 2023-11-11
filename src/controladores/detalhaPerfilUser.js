const pool = require('../bancodedados/conexao'); // Importe a conexão com o banco de dados

const detalharPerfilUsuario = async (req, res) => {
  const userId = req.usuario.id;
  console.log(userId);

  try {
    const query = 'SELECT nome, email FROM usuarios WHERE id = $1';
    const resultado = await pool.query(query, [userId]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    const usuario = resultado.rows[0];

    res.status(200).json(usuario);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = {detalharPerfilUsuario};
