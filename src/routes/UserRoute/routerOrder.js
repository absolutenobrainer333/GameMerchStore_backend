const express = require('express')
const UserMiddleware = require('../../middlewares/UserMiddleware')
const OrderController = require('../../controllers/User/OrderController')
const routerOrder = express.Router()

routerOrder.use(UserMiddleware)

routerOrder.get(['/', '/index'], OrderController.getOrder)
routerOrder.get('/order-detail', OrderController.getAllOrderDetail)

routerOrder.post('/add', OrderController.add)
routerOrder.put('/update', OrderController.update)
routerOrder.delete('/delete', OrderController.delete)

routerOrder.post('/checkout', OrderController.checkout)

module.exports = routerOrder
