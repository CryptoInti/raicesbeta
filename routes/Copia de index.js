var ctrl = require('../app-server/controllers/main');

console.log("pre index.js");

module.exports = function (app) {
	console.log("index.js Antes");
  app.get('/', ctrl);
  console.log("index.js Despues");
};