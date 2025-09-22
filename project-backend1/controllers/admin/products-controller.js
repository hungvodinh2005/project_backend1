const product = require("../../models/product-model0");
const filterStatusvari = require("./helpers/filterStatus.js");
const searchvari = require("./helpers/search.js");
const dividePagevari = require("./helpers/dividePage.js");
module.exports.productController = async (req, res) => {
  let filterStatus = filterStatusvari.filterStatus();
  let find = {
    deleted: false,
  };
  if (req.query.status) {
    find.status = req.query.status;
  }
  let search = searchvari.search(req.query);
  if (search.keyword) {
    find.title = { $regex: search.regex };
  }
  let dividePage = await dividePagevari.dividePage(product, req.query);
  const products = await product
    .find(find)
    .limit(dividePage.limitElement)
    .skip(dividePage.indexStartElement);
  res.render("admin/pages/products/index", {
    pageTitle: "danh sach san pham",
    products: products,
    filterStatus: filterStatus,
    search: search.keyword,
    totalPages: dividePage.totalPages,
    currentPage: dividePage.currentPage,
  });
};
