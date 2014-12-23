/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */

angular.module('TwitterDataJournalism')
  .controller('MainCtrl', function MainCtrl ($scope, $routeParams) {
    
    'use strict';

    console.log('main controller');

    $scope.testVar = ''

});