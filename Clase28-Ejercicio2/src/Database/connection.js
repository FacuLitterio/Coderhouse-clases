const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config");

const mongoConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoConnect;
