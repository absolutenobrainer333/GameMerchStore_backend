const ProductRepository = require('../repositories/ProductRepository')

module.exports = {
	getAllProducts: async (req, res) => {
		try {
			return res.status(200).json(await ProductRepository.getAll())
		} catch (error) {
			console.log(error)
			return res.status(500).json({ error: 'Internal server error' })
		}
	},
	getProductDetail: async (req, res) => {
		try {
			const product = await ProductRepository.getById(req.params.id)
			if (!product) {
				return res.status(404).json({ error: 'Page not found' })
			}
			return res.status(200).json(product)
		} catch (error) {
			return res.status(500).json({ error: 'Internal server error' })
		}
	},
	filterProduct: async (req, res) => {
		try {
			const { categoryName, name } = req.query
			let products = []
			if (categoryName && name) {
				products = await ProductRepository.filterByCategoryAndName(
					categoryName,
					name
				)
			} else if (categoryName) {
				products = await ProductRepository.filterByCategory(categoryName)
			} else if (name) {
				products = await ProductRepository.filterByNameContained(name)
			} else {
				products = await ProductRepository.getAll()
			}
			return res.status(200).json(products)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ error: 'Internal server error' })
		}
	},
}
