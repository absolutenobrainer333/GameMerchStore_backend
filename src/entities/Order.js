'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		static associate(models) {}
	}
	Order.init(
		{
			quantity: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			total: {
				type: DataTypes.DOUBLE,
				defaultValue: 0,
			},
			order_date: {
				type: DataTypes.DATE,
				allowNull: true,
			},
			userId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'User',
					key: 'id',
				},
			},
			shippingId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Shipping',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'Order',
		}
	)
	return Order
}
