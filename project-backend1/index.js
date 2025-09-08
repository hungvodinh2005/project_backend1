const express = require("express");
const route = require("./routers/clients/index.router.js");
const app = express();
const port = 3000;
app.set("views", "./views");
app.set("view engine", "pug");
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
