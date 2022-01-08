const express = require("express");
const router = express.Router();

router.use("/troops/", require("./troops"));

module.exports = router;
