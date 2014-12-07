'use strict';                                                                                            
                                                                                                         
angular.module('tandemWebApp')                                                                 
  .controller('LoginCtrl', function ($scope, auth) {                                                
    $scope.username = '';                                                                                
    $scope.password = '';
    $scope.messages = {};

    $scope.onCredentialsChange = function(newVal, oldVal) {                                              
      if (newVal !== oldVal) {                                                                           
        $scope.messages = {};                                                                            
      } 
    };

    $scope.$watchGroup(['username', 'password'], $scope.onCredentialsChange);                            

    $scope.submit = function() {
      auth.login($scope.username, $scope.password)
    };

    $scope.submitFacebook = function() {
      console.log('submit facebook');
    };

    $scope.submitTwitter = function() {
      console.log('submit twitter');
    };
  })
