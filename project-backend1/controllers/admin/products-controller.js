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
module.exports.changeStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.params.status;

  const newStatus = status == "active" ? "inactive" : "active";
  console.log(id, newStatus);
  await product.findOne({ _id: id }).updateOne({ status: newStatus });
  res.redirect(req.get("Referer"));
};
module.exports.changeMulti = async (req, res) => {
  const typeid = req.body;
  const status = typeid.type;
  const id = typeid.id.split(",");

  await product.updateMany({ _id: { $in: id } }, { status: status });

  res.redirect(req.get("referer"));
};
