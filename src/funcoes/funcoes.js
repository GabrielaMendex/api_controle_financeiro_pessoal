const pool = require('../bancodedados/conexao');

const verificaEmailExistente = async (email) => {
  const { rows } = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  return rows.length > 0; // Retorna true se o email já existe no banco de dados
};

module.exports = {
  verificaEmailExistente,
}
