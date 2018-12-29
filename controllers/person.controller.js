exports.getAll = (req, res, next) => {
  res.status(201).send('Requisição recebida com sucesso!')
}
exports.put = (req, res, next) => {
  const name = req.params.name
  res.status(201).send(`Requisição recebida com sucesso! ${name}`)
}
exports.delete = (req, res, next) => {
  const id = req.params.id
  res.status(200).send(`Requisição recebida com sucesso! ${id}`)
}
