/* GET Nosotros (Us) page */
var us = function(req, res){
  res.render('index', { title: 'Sobre Nosotros', description: 'Somos un grupo de jovenes de la zona que buscamos devolver el valor a nuestra tierra mostrando al mundo todos sus atractivos, con respeto y cuidado por el medio ambiente.' });
  console.log("entro a module.exports de us.js");
};

module.exports = {
  us
};

