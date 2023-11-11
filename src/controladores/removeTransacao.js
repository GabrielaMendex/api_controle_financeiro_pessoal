const pool = require('../bancodedados/conexao');

const removeTransacao = async (req, res) => {
  const { id } = req.params;

  try {
  const transacaoParaRemover = await pool.query('select id from transacoes where usuario_id = $1 and id = $2', [req.usuario.id, id]);

  if(transacaoParaRemover.rowCount === 0) {
  return res.status(400).json({ mensagem: 'Transação não encontrada' });
 }
    await pool.query('delete from transacoes where id = $1', [id])

    res.status(204).send();
  } catch (error) {
    return res.status(500).json({ messagem: 'error interno no servidor' });
  }
};

module.exports = { removeTransacao };
