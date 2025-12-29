const db = require("../config/db");

// Get all products
const getAllProducts = (callback) => {
  const sql = "SELECT * FROM products";
  db.query(sql, callback);
};

// Add a new product
const addProduct = (product, callback) => {
  const { name, category, price, stock, description } = product;
  const sql =
    "INSERT INTO products (name, category, price, stock, description) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, category, price, stock, description], callback);
};

module.exports = {
  getAllProducts,
  addProduct,
};
