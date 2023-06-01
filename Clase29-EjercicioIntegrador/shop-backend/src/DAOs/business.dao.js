const Business = require("../Models/business.model");

class BusinessDAO {
  getBusiness = async () => {
    try {
      let business = await Business.find();
      return business;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  getBusinessById = async (id) => {
    try {
      let business = await Business.findById(id);
      if (!business) throw new Error("No business found");

      return business;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  saveBusiness = async (newBusiness) => {
    try {
      let business = await Business.create(newBusiness);
      return business;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  updateBusiness = async (businessId, newBusiness) => {
    try {
      const result = await Business.updateOne({ _id: businessId }, newBusiness);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

module.exports = BusinessDAO;
