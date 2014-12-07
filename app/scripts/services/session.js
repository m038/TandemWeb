'use strict';

/* authentication and user function. */
angular.module('tandemWebApp')
  .service('session', [ '$q', '$rootScope', 'storage', function($q, $rootScope, storage) {

  this.logged_in = false;
  this.identity = null;
  this.language = 'en';

  this.getIdentity = function() {
    defer = defer ? defer : $q.defer();
    return defer.promise; 
  }

  this.setIdentity = function() { 
  }

  this.clear = function() { 
    this.logged_in = false;
    this.identity = null;
  }

  }]);
