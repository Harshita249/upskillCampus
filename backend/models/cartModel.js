const db = require("../config/db");

// Add item to cart
const addToCart = (userId, productId, quantity, callback) => {
  const sql =
    "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";
  db.query(sql, [userId, productId, quantity], callback);
};

// Get cart items for a user
const getCartItems = (userId, callback) => {
  const sql = `
    SELECT cart.id, products.name, products.price, cart.quantity
    FROM cart
    JOIN products ON cart.product_id = products.id
    WHERE cart.user_id = ?
  `;
  db.query(sql, [userId], callback);
};

// Remove item from cart
const removeFromCart = (cartId, callback) => {
  const sql = "DELETE FROM cart WHERE id = ?";
  db.query(sql, [cartId], callback);
};

module.exports = {
  addToCart,
  getCartItems,
  removeFromCart,
};
