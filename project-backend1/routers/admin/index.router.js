const dashBoard = require("./dashBoard.router.js");
module.exports = (app) => {
  app.use("/admin/dashboard", dashBoard);
};
