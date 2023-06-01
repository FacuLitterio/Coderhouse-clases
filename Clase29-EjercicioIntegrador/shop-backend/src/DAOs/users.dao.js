const User = require("../Models/user.model");

class UserDAO {
  getUsers = async () => {
    try {
      let users = await User.find();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  getUserById = async (id) => {
    try {
      let user = await User.findById(id);
      if (!user) throw new Error("No user found");

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  saveUser = async (newUser) => {
    try {
      let user = await User.create(newUser);

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  updateUser = async (userId, newUser) => {
    try {
      const result = await User.updateOne({ _id: userId }, newUser);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

module.exports = UserDAO;
