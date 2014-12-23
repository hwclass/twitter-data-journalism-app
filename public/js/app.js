/**
 * The main TwitterDataJournalism module
 *
 * @type {angular.Module}
 */

angular.module('TwitterDataJournalism', ['ngRoute'])
  .config(function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {
      controller: 'MainCtrl',
      templateUrl: '../partials/main.html'
    }).otherwise({
      redirectTo: '/'
  });
});
