const pool = require('../bancodedados/conexao');

const listaTransacoes = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id, c.descricao as categoria_nome FROM transacoes t JOIN categorias c ON t.categoria_id = c.id WHERE t.usuario_id = $1', [req.usuario.id]);

    console.log(rows);

    res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ messagem: 'error interno no servidor' });
  }
};

module.exports = { listaTransacoes };
