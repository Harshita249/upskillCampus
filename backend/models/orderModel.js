const db = require("../config/db");

// Create a new order
const createOrder = (userId, totalAmount, callback) => {
  const sql =
    "INSERT INTO orders (user_id, total_amount) VALUES (?, ?)";
  db.query(sql, [userId, totalAmount], callback);
};

// Get orders for a user
const getOrdersByUser = (userId, callback) => {
  const sql = "SELECT * FROM orders WHERE user_id = ?";
  db.query(sql, [userId], callback);
};

module.exports = {
  createOrder,
  getOrdersByUser,
};
