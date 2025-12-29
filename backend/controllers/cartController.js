const db = require("../config/db");

// ADD TO CART
exports.addToCart = (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;

  if (!productId) {
    return res.status(400).json({ message: "Product ID required" });
  }

  const query =
    "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";

  db.query(query, [userId, productId, quantity || 1], (err) => {
    if (err) {
      console.error("Add to cart error:", err);
      return res.status(500).json({ message: "Failed to add to cart" });
    }

    res.json({ message: "Item added to cart" });
  });
};

// GET USER CART
exports.getCart = (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT 
      cart.id,
      products.name,
      products.category,
      products.price,
      cart.quantity
    FROM cart
    JOIN products ON cart.product_id = products.id
    WHERE cart.user_id = ?
  `;

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Fetch cart error:", err);
      return res.status(500).json({ message: "Failed to fetch cart" });
    }

    res.json(results);
  });
};
// REMOVE FROM CART
exports.removeFromCart = (req, res) => {
  const userId = req.user.id;
  const cartItemId = req.params.id;

  const query =
    "DELETE FROM cart WHERE id = ? AND user_id = ?";

  db.query(query, [cartItemId, userId], (err, result) => {
    if (err) {
      console.error("Remove cart error:", err);
      return res.status(500).json({ message: "Failed to remove item" });
    }

    res.json({ message: "Item removed from cart" });
  });
};
