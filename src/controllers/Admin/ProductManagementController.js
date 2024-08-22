const ProductManagementService = require('../../services/ProductManagementService')

module.exports = {
	index: ProductManagementService.getAllProducts,
	detail: ProductManagementService.getProductDetail,
	filter: ProductManagementService.filterProducts,
	add: ProductManagementService.add,
	update: ProductManagementService.update,
	delete: ProductManagementService.delete,
}
