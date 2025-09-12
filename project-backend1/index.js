const express = require("express");
const mongoose = require("mongoose");
const routeAdmin = require("./routers/admin/index.router.js");
const route = require("./routers/clients/index.router.js");
const database = require("./config/database.js");
const app = express();
require("dotenv").config();
database.database();
const port = process.env.PORT;
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
routeAdmin(app);
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
