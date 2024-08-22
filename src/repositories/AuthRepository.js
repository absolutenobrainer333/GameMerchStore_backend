const { Op } = require('sequelize')
const { DbContext } = require('../dbcontext/sequelize')

module.exports = {
	getByEmailAndPassword: async (email, password) =>
		await DbContext.User.findOne({
			where: { email: email, password: password },
		}),

	checkUserExisted: async (user) =>
		(await DbContext.User.findOne({
			where: {
				[Op.or]: [{ username: user.username }, { email: user.email }],
			},
		})) !== null,

	register: async (user) => await DbContext.User.create({ ...user }),
}
