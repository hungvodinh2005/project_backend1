const dashBoard = require("./dashBoard-router");
const pathAmin = require("../../config/systems");
module.exports = (app) => {
  PATH_ADMIN = pathAmin.prefixAdmin;
  app.use(PATH_ADMIN + "/dashBoard", dashBoard);
};
