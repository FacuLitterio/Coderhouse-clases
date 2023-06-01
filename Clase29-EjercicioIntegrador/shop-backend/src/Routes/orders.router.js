const { Router } = require("express");
const {
  getOrders,
  getOrderById,
  createOrder,
  resolveOrder,
} = require("../Controllers/orders.controller");

const router = Router();

router.get("/", getOrders);
router.get("/:orderId", getOrderById);
router.post("/", createOrder);
router.post("/:businessId/:productId", resolveOrder);

module.exports = router;
