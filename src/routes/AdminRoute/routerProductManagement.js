const express = require('express')
const ProductManagementController = require('../../controllers/Admin/ProductManagementController')
const UserMiddleware = require('../../middlewares/UserMiddleware')
const AdminMiddleware = require('../../middlewares/AdminMiddleware')
const routerProductManagement = express.Router()

routerProductManagement.use(UserMiddleware)
routerProductManagement.use(AdminMiddleware)

// Get METHOD
routerProductManagement.get(['/', '/index'], ProductManagementController.index)
routerProductManagement.get('/detail/:id', ProductManagementController.detail)
routerProductManagement.get('/filter', ProductManagementController.filter)

// Process METHOD
routerProductManagement.post('/add', ProductManagementController.add)
routerProductManagement.put('/update', ProductManagementController.update)
routerProductManagement.delete('/delete/:id', ProductManagementController.delete)

module.exports = routerProductManagement
