/**
 * The utility service for the the whole services.
 */

angular.module('TwitterDataJournalism')
  .factory('UtilityService', function ($http, TweetService) {
    return {
    	getTweetsByHashTag : function(screenName, hashTag, callback) {
        TweetService.getTweetsByHashTag(screenName, hashTag, function(data) {
          console.log('Utility Service getTweetsByHashTag: ' + data);
          callback(data);
    	  });
    	}
    }
  });