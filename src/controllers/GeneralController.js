const GeneralService = require('../services/GeneralService')

module.exports = {
	categories: GeneralService.getAllCategories,
}
