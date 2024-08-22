const ProductService = require('../../services/ProductService')

module.exports = {
	index: ProductService.getAllProducts,
	detail: ProductService.getProductDetail,
	newest: ProductService.getTop10NewestProduct,
	filter: ProductService.filterProduct,
}
