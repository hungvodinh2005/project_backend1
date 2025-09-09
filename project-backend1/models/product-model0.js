const mongoose = require("mongoose");

const product = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean,
});
const Product = mongoose.model("Product", product);
module.exports = Product;
