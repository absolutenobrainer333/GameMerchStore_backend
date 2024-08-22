const express = require('express')
const GeneralController = require('../controllers/GeneralController')
const routerGeneral = express.Router()

routerGeneral.get('/category', GeneralController.categories)

module.exports = routerGeneral
