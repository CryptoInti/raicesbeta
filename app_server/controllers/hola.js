
var hola = function(req, res){
  res.render('index', { title: 'Express HOLA!' });
  console.log("entro a module.exports en main.js por HOLA");
};

module.exports = {
  hola
};

