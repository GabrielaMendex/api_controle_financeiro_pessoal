const pool = require('../bancodedados/conexao');

const obterExtrato = async (req, res) => {

  const entradas = await pool.query('select * from transacoes where usuario_id = $1 and tipo = $2', [req.usuario.id, 'entrada']);

  const saidas = await pool.query('select * from transacoes where usuario_id = $1 and tipo = $2', [req.usuario.id, 'saida']);
  let valorTotalEntrada = 0;
  let valorTotalSaida = 0;

  for (let i = 0; i < entradas.rows.length; i++) {
    valorTotalEntrada += entradas.rows[i].valor;
  }

  for (let i = 0; i < saidas.rows.length; i++) {
    valorTotalSaida += saidas.rows[i].valor;
  }

  try {
  const extrato = {
    entrada: valorTotalEntrada,
    saida: valorTotalSaida,
  }

    return res.status(200).json(extrato);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

module.exports = {
  obterExtrato,
};
