'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		static associate(models) {}
	}
	Product.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				validate: {
					isFloat: true,
				},
			},
			categoryId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Category',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'Product',
		}
	)
	return Product
}
