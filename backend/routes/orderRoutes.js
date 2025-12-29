const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { placeOrder, getOrders } = require("../controllers/orderController");

router.post("/", authMiddleware, placeOrder);
router.get("/:userId", authMiddleware, getOrders);

module.exports = router;
