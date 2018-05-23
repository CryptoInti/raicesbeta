/* GET Services (Servicios) page */
var listServices = function(req, res){
  res.render('list-services', { title: 'Lista de Servicios', description: 'Esta es la lista de servicios turisticos en la zona',
  								pageHeader:{
  									title: 'Listado <br> de Servicios',
  									description: '<br> blablabla <br> blablabla <br> blablabla'
								},
								services: [{
									name: 'Cabañas Ayelemu',
									address: 'Km. 68,5 Valle Las Trancas, Provincia de Ñuble, Región del Bio bio, Chile',
									rating: 4,
									services: ['Wifi','Cabañas de 1-2;2-4;6+ Personas','Reservas Disponibles'],
									distance: '3,5km'
								},{
									name: 'Cabañas Vista Hermosa',
									address: 'Km. 38,5 Camino los Pellines, Provincia de Ñuble, Región del Bio bio, Chile',
									rating: 3,
									services: ['Wifi','Cabañas de 1-2;2-4;6+ Personas','Reservas Agotadas'],
									distance: '1,5km'
								},{
									name: 'Hotel Antu',
									address: 'Km. 75,5 Valle Las Trancas, Provincia de Ñuble, Región del Bio bio, Chile',
									rating: 5,
									services: ['Wifi','Cabañas de 1-2;2-4;6+ Personas','Reservas Disponibles'],
									distance: '5,5km'
								}]
							});
  console.log("entro al controller \'list\' de services.js");
};

var info = function(req, res){
  res.render('info-service', { title: 'Servicio X', description: 'Información del Servicio X' });
  console.log("entro al controller \'info\' de services.js");
};

var addReview = function(req, res){
  res.render('review-service', { title: 'Evalua tu servicio', description: 'El turista tiene la opción de evaluar los servicios' });
  console.log("entro al controller \'addReview\' de services.js");
};

module.exports = {
  listServices, info, addReview
};


