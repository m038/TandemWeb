'use strict';

/**
 * @ngdoc function
 * @name tandemWebApp.controller:QuestionsCtrl
 * @description
 * # QuestionsCtrl
 * Controller of the tandemWebApp
 */
angular.module('tandemWebApp')
  .controller('QuestionsCtrl', function ($scope, $http) {
    // TODO: load questions from api
    $scope.questions = [
      { id: 1, text: 'What is your name?'},
      { id: 2, text: 'Where are you from?'},
      { id: 3, text: 'Why are you learning another language?'}
    ];

    // setup twilio client
    $http.post('https://tandem.marklewis.me/client').
      success(function(data, status) {
        console.log(data.token, status);
        if (typeof data === 'undefined') {
          console.log('got token: ' . data.token);
        } else {
          console.log('got no data');
        }

        Twilio.Device.setup(data.token);

        /* Let us know when the client is ready. */
        Twilio.Device.ready(function (device) {
          console.log('Ready');
        });
   
        /* Report any errors on the screen */
        Twilio.Device.error(function (error) {
          console.log('Error: ' + error.message);
        });
   
        Twilio.Device.connect(function (conn) {
          console.log('Successfully established call');
        });
     }).
      error(function(data, status, headers, config) {
       console.log('Error connecting to twilio app');
    });

    /**
     * connect to twilio and start recording audio
     *
     */
    $scope.startRecording = function(questionId) {
      console.log('start recording');
      /* connect  to our twilio server */
      Twilio.Device.connect({
        'question_id': questionId
      });
    };

    /**
     * hang up twilio call
     *
     */
    $scope.endRecording = function() {
      Twilio.Device.disconnectAll();
    };

  });
