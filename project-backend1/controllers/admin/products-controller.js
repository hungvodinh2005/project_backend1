const product = require("../../models/product-model0");
module.exports.productController = async (req, res) => {
  const products = await product.find();
  res.render("admin/pages/products/index", {
    pageTitle: "danh sach san pham",
    products: products,
  });
};
