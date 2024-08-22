const { DbContext } = require('../dbcontext/sequelize')
const Product = require('../entities/Product')
const User = require('../entities/User')

module.exports = {
	// Order
	getByUser: async (user) =>
		await DbContext.Order.findOne({
			where: { userId: user.id, order_date: null },
			attributes: { exclude: ['order_date', 'shippingId'] },
		}),

	addByUser: async (user) => await DbContext.Order.create({ userId: user.id }),

	update: async (order, value) => {
		order.set({ ...value })
		await order.save()
	},

	checkout: async (order, shipping) => {
		order.set({ shippingId: shipping.id, order_date: new Date() })
		await order.save()
	},

	// Order Detail
	getAllOrderDetailByOrder: async (order) =>
		await DbContext.OrderDetail.findAll({
			include: 'Product',
			where: { orderId: order.id },
		}),

	getOrderDetailByOrderAndProduct: async (order, product) =>
		await DbContext.OrderDetail.findOne({
			include: 'Product',
			where: { orderId: order.id, productId: product.id },
		}),

	addOrderDetail: async (orderDetail) => await DbContext.OrderDetail.create({ ...orderDetail }),

	updateOrderDetail: async (orderDetail, value) => {
		orderDetail.set({ ...value })
		await orderDetail.save()
	},

	deleteOrderDetail: async (orderDetail) => await orderDetail.destroy(),

	// Shipping
	addShipping: async (shipping) => await DbContext.Shipping.create({ ...shipping }),
}
