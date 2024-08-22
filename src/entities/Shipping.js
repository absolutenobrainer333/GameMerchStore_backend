'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Shipping extends Model {
		static associate(models) {}
	}
	Shipping.init(
		{
			recipientName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [8, 12],
					isNumeric: true,
				},
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Shipping',
		}
	)
	return Shipping
}
