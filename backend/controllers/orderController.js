const db = require("../config/db");

exports.placeOrder = (req, res) => {
  const userId = req.user.id;

  const orderQuery = "INSERT INTO orders (user_id) VALUES (?)";

  db.query(orderQuery, [userId], (err, result) => {
    if (err) return res.status(500).json({ message: "Order failed" });

    const orderId = result.insertId;

    const moveCartQuery = `
      INSERT INTO order_items (order_id, product_id, quantity)
      SELECT ?, product_id, quantity FROM cart WHERE user_id = ?
    `;

    db.query(moveCartQuery, [orderId, userId], (err2) => {
      if (err2) return res.status(500).json({ message: "Order failed" });

      db.query("DELETE FROM cart WHERE user_id = ?", [userId]);

      res.json({ message: "Order placed successfully" });
    });
  });
};

exports.getOrders = (req, res) => {
  const userId = req.params.userId;

  db.query(
    "SELECT * FROM orders WHERE user_id = ?",
    [userId],
    (err, results) => {
      if (err) return res.status(500).json({ message: "Error fetching orders" });
      res.json(results);
    }
  );
};
