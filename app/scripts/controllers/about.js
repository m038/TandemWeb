'use strict';

/**
 * @ngdoc function
 * @name tandemWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tandemWebApp
 */
angular.module('tandemWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
