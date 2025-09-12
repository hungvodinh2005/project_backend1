const express = require("express");
const router = express.Router();
const dashBoard = require("../../controllers/admin/dashboard-controller");
router.get("/", dashBoard.dashBoardController);
module.exports = router;
