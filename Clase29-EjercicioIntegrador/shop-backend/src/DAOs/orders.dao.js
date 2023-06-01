const Order = require("../Models/order.model");

class OrdersDAO {
  getOrders = async () => {
    try {
      let orders = await Order.find();
      return orders;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  getOrderById = async (id) => {
    try {
      let order = await Order.findById(id);
      if (!order) throw new Error("No order found");

      return order;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  createOrder = async (newOrder) => {
    try {
      let order = await Order.create(newOrder);
      return order;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  resolverOder = async (orderId, newOrder) => {
    try {
      const result = await Order.updateOne({ _id: orderId }, newOrder);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

module.exports = OrdersDAO;
