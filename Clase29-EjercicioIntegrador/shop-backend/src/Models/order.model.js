const { Schema, model, SchemaTypes } = require("mongoose");

const orderSchema = new Schema({
  businessId: {
    type: SchemaTypes.ObjectId,
    ref: "Business",
  },
  userId: {
    type: SchemaTypes.ObjectId,
    ref: "Users",
  },
  products: {
    type: Array,
    default: [],
  },
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },
});

module.exports = model("orders", orderSchema);
