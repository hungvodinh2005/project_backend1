const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

var methodOverride = require("method-override");
const routeAdmin = require("./routers/admin/index-router.js");
const route = require("./routers/clients/index.router.js");
const database = require("./config/database.js");
const systemconfig = require("./config/systems.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
require("dotenv").config();
database.database();
const port = process.env.PORT;
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
routeAdmin(app);
route(app);
app.locals.prefixAdmin = systemconfig.prefixAdmin;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
