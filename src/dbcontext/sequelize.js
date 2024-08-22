const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('gamemerchstore', 'user', 'thisisforuserforthewebpj111', {
	host: 'localhost',
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
const Shipping = require('../entities/Shipping')(sequelize, DataTypes)
const Order = require('../entities/Order')(sequelize, DataTypes)
const OrderDetail = require('../entities/OrderDetail')(sequelize, DataTypes)

User.hasMany(Order, { foreignKey: 'userId', as: 'User' })

Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'Category' })
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'Products' })

Order.hasOne(Shipping, { foreignKey: 'id', as: 'Shipping' })

Order.hasMany(OrderDetail, { foreignKey: 'orderId', as: 'OrderDetails' })
Product.hasMany(OrderDetail, { foreignKey: 'productId', as: 'OrderDetails' })

OrderDetail.belongsTo(Order, { foreignKey: 'orderId', as: 'Order' })
OrderDetail.belongsTo(Product, { foreignKey: 'productId', as: 'Product' })

// sequelize.sync({ alter: true })

const DbContext = {
	User,
	Category,
	Product,
	Shipping,
	Order,
	OrderDetail,
}

module.exports = { DbContext, sequelize }
