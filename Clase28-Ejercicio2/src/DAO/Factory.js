const { PERSISTANCE } = require("../config");
const path = require("path");
const connectionToDatabase = require("../Database/connection");

const CONTACTS_FILE = path.join(__dirname, "../Files/contacts.json");

let Contacts;

switch (PERSISTANCE) {
  case "Mongo":
    connectionToDatabase();
    const MongoContactDAO = require("./Mongo/contacts.mongo");
    Contacts = new MongoContactDAO();
    break;
  case "FileSystem":
    const FilesystemContactDAO = require("./FileSystem/contacts.filesystem");
    Contacts = new FilesystemContactDAO(CONTACTS_FILE);
    break;
  default:
    throw new Error("Persistance is not defined");
}

module.exports = {
  Contacts,
};
