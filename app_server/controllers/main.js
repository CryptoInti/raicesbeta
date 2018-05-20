/* GET home page */
var index = function(req, res){
  res.render('index', { title: 'Express Sehr!' });
  console.log("entro a module.exports en main.js");
};

module.exports = {
  index
};

