const pool = require('../bancodedados/conexao');

const editarTransacao = async (req, res) => {
  const { id } = req.params;
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    return res.status(400).json({ messagem: 'Todos os campos obrigatórios devem ser informados.'});
  }

  const transacaoEncontrada = await pool.query('select id from transacoes where usuario_id = $1 and id = $2', [req.usuario.id, id]);

  if(transacaoEncontrada.rowCount === 0) {
    return res.status(400).json({ mensagem: 'Transação não encontrada' });
    }

  const categoriaEncontrada = await pool.query('select id from categorias where id = $1', [categoria_id]);
    if (categoriaEncontrada.rowCount === 0) {
      return res.status(400).json({ mensagem: 'Categoria não encontrada' });
    };

  if (tipo !== 'entrada' && tipo !== 'saida') {
    return res.status(400).json({ mensagem: 'Tipo de transação invalida' });
  }

  try {
    const queryAtualizaTransacao =
      'UPDATE transacoes set descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5 where id = $6';
    await pool.query(queryAtualizaTransacao, [
      descricao,
      valor,
      data,
      categoria_id,
      tipo,
      id,
    ]);

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ messagem: 'error interno no servidor' });
  }
};

module.exports = { editarTransacao };
