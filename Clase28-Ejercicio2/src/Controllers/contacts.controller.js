// const ContactsMongoDAO = require("../DAO/Mongo/contacts.mongo");
//const ContactsFsDAO = require("../DAO/FileSystem/contacts.filesystem");
const { Contacts } = require("../DAO/Factory");

// const Contacts = new ContactsMongoDAO();
// const Contacts = new ContactsFsDAO(
//   path.join(__dirname, "../Files/contacts.json")
// );

const getAllContacts = async (req, res) => {
  let result = await Contacts.get();
  res.json(result);
};

const createContact = (req, res) => {};

module.exports = {
  getAllContacts,
  createContact,
};
