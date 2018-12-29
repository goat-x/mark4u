const express = require('express')
const pack = require('../package.json')
const index = require('../routes/index')
const person = require('../routes/person.route')
const app = express()
const httpPort = 3000

app.listen(httpPort)
app.use('/', index)
app.use('/person', person)
app.get('*', (req, res) => {
  res.send('URL inválida (mark4u.com)')
})
console.log(`${pack.name} (${pack.version}) iniciado na porta ${httpPort}`)
module.exports = app
