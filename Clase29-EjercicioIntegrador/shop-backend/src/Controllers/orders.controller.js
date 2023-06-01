const OrdersDAO = require("../DAOs/orders.dao");
const BusinessDAO = require("../DAOs/business.dao");
const UserDAO = require("../DAOs/users.dao");

const UserService = new UserDAO();
const BusinessService = new BusinessDAO();
const OrdersService = new OrdersDAO();

module.exports = {
  getOrders: async (req, res) => {
    try {
      let orders = await OrdersService.getOrders();
      res.json({ data: orders });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getOrderById: async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const order = await OrderService.getOrderById(orderId);

      res.json({ data: order });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createOrder: async (req, res) => {
    try {
      const { user, business, products } = req.body;
      const _user = await UserService.getUserById(user._id);
      const _business = await BusinessService.getBusinessById(business._id);

      if (!_user || !_business) throw new Error("No User or Business");

      const actualOrders = _business.products.filter((product) =>
        products.includes(product._id)
      );

      const newOrder = {
        businessId: _business._id,
        userId: _user._id,
        products: actualOrders.map((product) => product._id),
      };

      const _order = await OrdersService.createOrder(newOrder);

      res.json({ data: _order });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  resolveOrder: async (req, res) => {
    try {
      const { resolve } = req.query;
      const orderId = req.params.orderId;
      let order = await OrdersService.getOrderById(orderId);

      order.status = resolve;

      await OrdersService.resolverOder(order._id, order);

      res.json({ message: `Order upgraded with status ${resolve}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
