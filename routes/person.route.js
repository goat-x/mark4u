const express = require('express')
const router = express.Router()
const personCtrl = require('../controllers/person.controller')

router.get('/',
  personCtrl.getAll)

router.get('/register/name/:name',
  personCtrl.put)

module.exports = router
