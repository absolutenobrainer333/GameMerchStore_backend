const ProductService = require('../../services/ProductService')

module.exports = {
	index: ProductService.getAllProducts,
	detail: ProductService.getProductDetail,
	filter: ProductService.filterProduct,
}
