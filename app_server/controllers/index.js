
/* GET home page */
console.log("ctrl/index.js?")
exports.index = function(req, res){
	console.log("ctrl/index.js GO?")
 res.render('index', { title: 'Raices del Ñuble', description: 'Conoce lo más hermoso de nuestra zona desde sus Raices.' });
};

