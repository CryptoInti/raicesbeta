
var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlHola = require('../controllers/hola');

console.log("entro a routes/index.js");
/* GET home page. */
router.get('/', ctrlMain.index);

router.get('/hola', ctrlHola.hola);

module.exports = router;