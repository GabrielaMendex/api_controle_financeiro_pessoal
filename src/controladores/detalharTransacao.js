const pool = require('../bancodedados/conexao');

const detalharTransacao = async (req, res) => {
  const { id } = req.params;

  try {
  const {rows} = await pool.query('select t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id, c.descricao as categoria_nome from transacoes t join categorias c on t.categoria_id = c.id where t.usuario_id = $1 and t.id = $2', [req.usuario.id, id]);


  if(rows.length === 0) {
    return res.status(400).json({ mensagem: "Transação não encontrada."})
  }

  res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor'})
  }
};

module.exports = { detalharTransacao };
