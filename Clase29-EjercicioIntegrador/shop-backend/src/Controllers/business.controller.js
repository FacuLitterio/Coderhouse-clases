const BusinessDAO = require("../DAOs/business.dao");

const BusinessService = new BusinessDAO();

module.exports = {
  getAllBusiness: async (req, res) => {
    try {
      let business = await BusinessService.getBusiness();
      res.json({ data: business });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getBusinessById: async (req, res) => {
    try {
      const businessId = req.params.businessId;
      const business = await BusinessService.getBusinessById(businessId);

      res.json({ data: business });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createBusiness: async (req, res) => {
    try {
      const { name, products } = req.body;

      const newBusiness = {
        name,
        products,
      };

      const result = await BusinessService.saveBusiness(newBusiness);

      res.json({ data: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  addBusinessProduct: async (req, res) => {
    try {
      const newProduct = req.body;
      const businessId = req.params.businessId;

      const business = await BusinessService.getBusinessById(businessId);
      business.products.push(newProduct);

      const result = await BusinessService.updateBusiness(
        business._id,
        business
      );

      res.json({ data: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
