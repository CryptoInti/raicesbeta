/* 
* GET home page. 
*/ 
/*
exports.index = function(req, res){ 
res.render('index', { title: 'Express Gut!' }); 
}; 
*/
var ctrl = require('../app_server/controllers/main');
module.exports = function (app) { 
	app.get('/', ctrl.index);
	};