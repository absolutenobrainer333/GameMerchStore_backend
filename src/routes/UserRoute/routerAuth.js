const express = require('express')
const AuthController = require('../../controllers/User/AuthController')
const routerAuth = express.Router()

routerAuth.post('/login', AuthController.login)
routerAuth.post('/register', AuthController.register)

module.exports = routerAuth
