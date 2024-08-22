const express = require('express')
const ProductController = require('../../controllers/User/ProductController')
const routerProduct = express.Router()

routerProduct.get(['/', '/index'], ProductController.index)
routerProduct.get('/detail/:id', ProductController.detail)
routerProduct.get('/filter', ProductController.filter)
routerProduct.get('/newest', ProductController.newest)

module.exports = routerProduct
