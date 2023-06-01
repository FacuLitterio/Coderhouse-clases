const UserDAO = require("../DAOs/users.dao");

const UserService = new UserDAO();

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      let users = await UserService.getUsers();
      res.json({ data: users });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await UserService.getUserById(userId);

      res.json({ data: user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  saveUser: async (req, res) => {
    try {
      const { name, email, role, orders = [] } = req.body;

      const newUser = {
        name,
        email,
        role,
        orders,
      };

      const result = await UserService.saveUser(newUser);

      res.json({ data: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
