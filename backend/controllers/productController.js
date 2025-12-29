const productModel = require("../models/productModel");

// Get all products
const getProducts = (req, res) => {
  productModel.getAllProducts((err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
};

// Add new product
const addProduct = (req, res) => {
  const product = req.body;

  if (!product.name || !product.category || !product.price || !product.stock) {
    return res.status(400).json({ message: "All fields are required" });
  }

  productModel.addProduct(product, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(201).json({ message: "Product added successfully" });
  });
};

module.exports = {
  getProducts,
  addProduct,
};
