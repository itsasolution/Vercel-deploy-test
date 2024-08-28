
var userrouter = require("./users")
var express = require('express');
var router = express.Router();

const { default: mongoose } = require('mongoose');

try {
  let Mongourl = process.env.mongoUrl || "mongodb://127.0.0.1:27017/Renify";

  mongoose.connect(Mongourl)
  console.log("DB connection success")
} catch (err) {
  console.log("dataBase error" + err)
}

router.use("/user", userrouter)

router.get('/', function (req, res, next) {
  res.send(`<h2>Testing Okk</h2>`)
});
router.get('/index', function (req, res, next) {
  res.send(`<h2>Index</h2>`)
});

router.get("/", (req, res) => {
  res.status(200).send("Everthing is working fine...")
})

router.get("/cookie", (req, res) => {
  res.cookie("name", "Piyush")
  res.send("cookie tutorial Press 'i' on left of localhost:4000\nused to end small piece of data to server ")
})

module.exports = router;






module.exports = router;
