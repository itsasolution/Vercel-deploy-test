var express = require('express');
var router = express.Router();
var nodemailer = require("./nodemailer")
var userrouter = require("./users")

router.use("/mail", nodemailer)

/* GET home page. */
router.use("/users", userrouter)
router.get('/test', function (req, res, next) {
  res.send(`<h2>Testing Okk</h2>`)
});
router.get('/index', function (req, res, next) {
  res.send(`<h2>Index</h2>`)
});



module.exports = router;
