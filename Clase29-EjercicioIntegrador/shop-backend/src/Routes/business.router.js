const { Router } = require("express");
const {
  getAllBusiness,
  getBusinessById,
  createBusiness,
  addBusinessProduct,
} = require("../Controllers/business.controller");

const router = Router();

router.get("/", getAllBusiness);
router.get("/:businessId", getBusinessById);
router.post("/", createBusiness);
router.post("/:businessId/product", addBusinessProduct);

module.exports = router;
