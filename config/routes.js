'use strict';

var testCtrl= require('../app/controllers/test');

module.exports = function(app) {

	//test routes-----------------------------------------------------------
  app.get('/api/test', testCtrl.getTest);

};