const obterPerfil = async (req, res) => {
  return res.json(req.usuario);
}

module.exports = {obterPerfil};