const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  saveUser,
} = require("../Controllers/users.controller");

const router = Router();

router.get("/", getAllUsers);
router.get("/:userId", getUserById);
router.post("/", saveUser);

module.exports = router;
