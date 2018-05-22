/* GET home page */
var index = function(req, res){
  res.render('index', { title: 'Raices del Ñuble', description: 'Conoce lo más hermoso de nuestra zona desde sus Raices.' });
  console.log("entro a module.exports en main.js");
};

module.exports = {
  index
};

