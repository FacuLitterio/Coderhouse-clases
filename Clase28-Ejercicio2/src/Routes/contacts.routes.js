const { Router } = require("express");
const {
  getAllContacts,
  createContact,
} = require("../Controllers/contacts.controller");

const router = Router();

router.get("/", getAllContacts);
router.post("/", createContact);

module.exports = router;
