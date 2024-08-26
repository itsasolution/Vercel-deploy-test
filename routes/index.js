var express = require('express');
var router = express.Router();
var nodemailer = require("./nodemailer")

router.use("/mail", nodemailer)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(`<h2>Index</h2>`)
});



module.exports = router;
