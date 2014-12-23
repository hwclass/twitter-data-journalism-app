/**
 * The utility service for the the whole services.
 */

angular.module('TwitterDataJournalism')
  .factory('UtilityService', function ($http, TweetService) {
    return {
    	getTweetsByHashTag : function(callback) {
    		TweetService.getTweetsByHashTag(function(data) {
    	    callback(data);
    	  });
    	}
    }
  });