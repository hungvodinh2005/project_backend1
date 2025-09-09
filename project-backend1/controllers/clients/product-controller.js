const Product = require("../../models/product-model0");
module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  });
  products.forEach((item) => {
    item.priceNew = ((1 - item.discountPercentage / 100) * item.price).toFixed(
      0
    );
  });
  res.render("clients/pages/products/index.pug", {
    pagetitle: "trang product",
    products: products,
  });
};
