var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', function (req, res){
	console.log(req.params);
	//res.send(req.params.id, 200);
	res.render("index", {title:"Me", school:"Columbia"});
});


module.exports = router;
