const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('db_aac510_gmstore', 'aac510_gmstore', 'dsadsa123', {
	host: 'mysql8001.site4now.net',
	dialect: 'mysql',
	logging: false,
	define: {
		timestamps: false,
		freezeTableName: true,
	},
})

const User = require('../entities/User')(sequelize, DataTypes)
const Category = require('../entities/Category')(sequelize, DataTypes)
const Product = require('../entities/Product')(sequelize, DataTypes)
const Order = require('../entities/Order')(sequelize, DataTypes)
const OrderDetail = require('../entities/OrderDetail')(sequelize, DataTypes)

User.hasMany(Order, { foreignKey: 'userId', as: 'User' })

Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'Category' })
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'Products' })

Order.hasMany(OrderDetail, { foreignKey: 'orderId', as: 'OrderDetails' })
Product.hasMany(OrderDetail, { foreignKey: 'productId', as: 'OrderDetails' })

OrderDetail.belongsTo(Order, { foreignKey: 'orderId', as: 'Order' })
OrderDetail.belongsTo(Product, { foreignKey: 'productId', as: 'Product' })

// sequelize.sync({ alter: true })

const DbContext = {
	User,
	Category,
	Product,
	Order,
	OrderDetail,
}

module.exports = { DbContext, sequelize }

// fibis64120@segichen.com
