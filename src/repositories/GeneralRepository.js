const { DbContext } = require('../dbcontext/sequelize')

module.exports = {
	getAllCategories: async () => await DbContext.Category.findAll(),
}
