const Contacts = require("../../Models/contact.model");

class ContactsMongoDAO {
  get = async () => {
    console.log("GET from Mongo DAO");
    const contacts = await Contacts.find();
    return contacts;
  };
}

module.exports = ContactsMongoDAO;
