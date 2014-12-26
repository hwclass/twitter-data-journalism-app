'use strict';

var tweetCtrl= require('../app/controllers/tweet');

module.exports = function(app) {

  //tweet routes-----------------------------------------------------------
  app.get('/api/tweets/hashtag/:hashtag', tweetCtrl.getTweetsByHashTag);

  // application -------------------------------------------------------------
  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });

};