var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res) {
  res.render("users", {name:req.params.id});
});

module.exports = router;
