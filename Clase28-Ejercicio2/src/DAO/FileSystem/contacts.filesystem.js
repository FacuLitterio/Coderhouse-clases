const fs = require("fs");

class ContactsFsDAO {
  constructor(filename) {
    this.filename = filename;
  }

  get = async () => {
    console.log("GET from Filesystem DAO");
    const contacts = await fs.promises.readFile(this.filename, "utf-8");
    return JSON.parse(contacts || "[]");
  };
}

module.exports = ContactsFsDAO;
