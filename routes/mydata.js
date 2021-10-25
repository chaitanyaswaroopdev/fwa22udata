var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("mydata", {
    title: "Chaitanya Swaroop Udata",
    fact: "I love to cook maggie from scratch",
  });
});

module.exports = router;
