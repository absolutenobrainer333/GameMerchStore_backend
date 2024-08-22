'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class OrderDetail extends Model {
		static associate(models) {}
	}
	OrderDetail.init(
		{
			orderId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				references: {
					model: 'Order',
					key: 'id',
				},
			},
			productId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				references: {
					model: 'Product',
					key: 'id',
				},
			},
			amount: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			subtotal: {
				type: DataTypes.DOUBLE,
				defaultValue: 0,
			},
		},
		{
			sequelize,
			modelName: 'OrderDetail',
			tableName: 'order_detail',
		}
	)
	return OrderDetail
}
