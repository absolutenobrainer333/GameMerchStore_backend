const ProductRepository = require("../repositories/ProductRepository");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      return res.status(200).json(await ProductRepository.getAll());
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  getProductDetail: async (req, res) => {
    try {
      const product = await ProductRepository.getById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Page not found" });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  filterProducts: async (req, res) => {
    try {
      return res
        .status(200)
        .json(await ProductRepository.filterByNameContained(req.query.name));
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  add: async (req, res) => {
    try {
      await ProductRepository.add(req.body);
      return res.status(201).json(await ProductRepository.getAll());
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  update: async (req, res) => {
    try {
      const product = await ProductRepository.getById(req.body.id);
      if (product) {
        await ProductRepository.update(product, req.body);
      }

      return res.status(200).json(await ProductRepository.getAll());
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  delete: async (req, res) => {
    try {
      const product = await ProductRepository.getById(req.params.id);
      if (product) {
        await ProductRepository.delete(product);
      }

      return res.status(200).json(await ProductRepository.getAll());
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};
