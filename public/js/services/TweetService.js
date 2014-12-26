/**
 * The artist service for the app.
 */

angular.module('TwitterDataJournalism')
	.factory('TweetService', function ($http) {
    return {
      getTweetsByHashTag : function (screenName, hashTag, callback) {
        console.log('Tweet Service getTweetsByHashTag' + screenName, hashTag);
        $http.get('/api/tweets/hashtag/' + hashTag).
          success(function(data, status, headers, config) {
            console.log(data);
            callback(data);
          }).
          error(function(data, status, headers, config) {
            console.log(data);
        });
      }
    }
  });