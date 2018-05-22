/* GET Services (Servicios) page */
var listServices = function(req, res){
  res.render('index', { title: 'Lista de Servicios', description: 'Esta es la lsita de servicios turisticos en la zona' });
  console.log("entro al controller \'list\' de services.js");
};

var info = function(req, res){
  res.render('index', { title: 'Servicio X', description: 'Información del Servicio X' });
  console.log("entro al controller \'info\' de services.js");
};

var addReview = function(req, res){
  res.render('index', { title: 'Evalua tu servicio', description: 'El turista tiene la opción de evaluar los servicios' });
  console.log("entro al controller \'addReview\' de services.js");
};

module.exports = {
  listServices, info, addReview
};


