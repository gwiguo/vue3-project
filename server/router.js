const express = require("express");
const router = express.Router();
const queryUser = require("./API/queryUser.js");
const userStat = require("./API/userStat.js");

router.post("/queryUser",queryUser.post);
router.post("/userStat",userStat.post);

module.exports = router;