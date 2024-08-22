const GeneralRepository = require('../repositories/GeneralRepository')

module.exports = {
	getAllCategories: async (req, res) => {
		try {
			return res.status(200).json(await GeneralRepository.getAllCategories())
		} catch (error) {
			return res.status(500).json({ error: 'Internal server error' })
		}
	},
}
