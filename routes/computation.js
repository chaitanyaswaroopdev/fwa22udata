var express = require("express");
var router = express.Router();
var rno;
var atan2;
var atanh;
var cbrt;

/* GET users listing. */

router.get("/", function (req, res, next) {
  rno = Math.round(Math.random() * (100 - 1) + 1);

  acosh = Math.atan2(rno);

  log1p = Math.atanh(rno);

  tan = Math.cbrt(rno);

  res.send(`atan2 applied to ${rno} is ${atan2} <br>

  atanh applied to ${rno} is ${atanh} <br>

  cbrt applied to ${rno} is ${cbrt}`);
});

module.exports = router;