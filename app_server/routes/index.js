
var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlServices = require('../controllers/services');
var ctrlUs = require('../controllers/us');

var ctrlHola = require('../controllers/hola');

console.log("entro a routes/index.js");
/* GET home page. */
router.get('/', ctrlServices.listServices/*ctrlMain.index*/);
/* test de hola */
router.get('/hola', ctrlHola.hola);

/* rutas de los servicios */
router.get('/list-services', ctrlServices.listServices);
router.get('/info-service', ctrlServices.info);
router.get('/service/review/new', ctrlServices.addReview);

/* ruta a nosotros (us) */
router.get('/us', ctrlUs.us);

module.exports = router;