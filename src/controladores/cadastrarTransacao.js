const pool = require("../bancodedados/conexao");

const cadastraTransacao = async (req, res) => {
  const { descricao, valor, data, categoria_id, tipo} = req.body;

  try {
    if (!descricao || !valor || !data || !categoria_id || !tipo) {
      return res.status(400).json({ messagem: 'Todos os campos obrigatórios devem ser informados.'});
    }

    const categoriaEncontrada = await pool.query('select * from categorias where id = $1', [categoria_id]);

    if (categoriaEncontrada.rowCount === 0) {
      return res.status(400).json({ mensagem: 'Categoria não encontrada' });
    }

    if(tipo !== "entrada" && tipo !== "saida") {
    return res.status(400).json({ mensagem: 'Tipo de transação não encontrada' });
    }

    const {rows} = await pool.query('insert into transacoes (tipo, descricao, valor, data, categoria_id, usuario_id) values ($1, $2, $3, $4, $5, $6) returning *', [tipo, descricao, valor, data, categoria_id, req.usuario.id]);

    const novaTransacao = await pool.query('select t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id, c.descricao as categoria_nome from transacoes t join categorias c on t.categoria_id = c.id where t.usuario_id = $1 and t.id = $2', [req.usuario.id, rows[0].id]);

    res.status(201).json(novaTransacao.rows[0]);
  } catch (error) {
    return res.status(500).json({ messagem: 'error interno no servidor' });
  }
};

module.exports = {
  cadastraTransacao
};