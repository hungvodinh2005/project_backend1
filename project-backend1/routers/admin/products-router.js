const express = require("express");
const route = express.Router();
const products = require("../../controllers/admin/products-controller");
route.get("/", products.productController);
module.exports = route;
