const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    logging: false,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);

const User = require("../entities/User")(sequelize, DataTypes);
const Category = require("../entities/Category")(sequelize, DataTypes);
const Product = require("../entities/Product")(sequelize, DataTypes);
const Order = require("../entities/Order")(sequelize, DataTypes);
const OrderDetail = require("../entities/OrderDetail")(sequelize, DataTypes);

User.hasMany(Order, { foreignKey: "userId", as: "User" });

Product.belongsTo(Category, { foreignKey: "categoryId", as: "Category" });
Category.hasMany(Product, { foreignKey: "categoryId", as: "Products" });

Order.hasMany(OrderDetail, { foreignKey: "orderId", as: "OrderDetails" });
Product.hasMany(OrderDetail, { foreignKey: "productId", as: "OrderDetails" });

OrderDetail.belongsTo(Order, { foreignKey: "orderId", as: "Order" });
OrderDetail.belongsTo(Product, { foreignKey: "productId", as: "Product" });

// sequelize.sync({ alter: true })

const DbContext = {
  User,
  Category,
  Product,
  Order,
  OrderDetail,
};

module.exports = { DbContext, sequelize };

// fibis64120@segichen.com
