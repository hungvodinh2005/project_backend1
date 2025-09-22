const express = require("express");
const route = express.Router();
const products = require("../../controllers/admin/products-controller");
route.get("/", products.productController);
route.patch("/changeStatus/:id/:status", products.changeStatus);
route.patch("/changeMulti", products.changeMulti);
module.exports = route;
