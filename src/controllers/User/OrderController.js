const OrderService = require('../../services/OrderService')

module.exports = {
	getOrder: OrderService.getOrder,
	getAllOrderDetail: OrderService.getAllOrderDetail,
	add: OrderService.addOrderDetail,
	update: OrderService.updateOrderDetail,
	delete: OrderService.deleteOrderDetail,
	checkout: OrderService.checkout,
}
