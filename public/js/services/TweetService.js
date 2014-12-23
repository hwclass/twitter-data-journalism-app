/**
 * The artist service for the app.
 */

angular.module('TwitterDataJournalism')
	.factory('TweetService', function ($http) {
    return {
      getTweetsByHashTag : function (callback) {
        $http.post('/api/tweets').
          success(function(data, status, headers, config) {
            callback(data);
          }).
          error(function(data, status, headers, config) {
            console.log(data);
        });
      }
    }
  });