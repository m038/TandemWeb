'use strict';

angular.module('tandemWebApp')
  .provider('auth', function() {
    var provider = this;
    this.$get = ['$q', 'session', function($q, session) {

      return {
        login: function(username, password) {
          if (password === '123123') {
              session.identity = 'mark';
              session.logged_in = true;
          }
          return session.identity;
        },
        logout: function() {
          session.clear();
        }
      };
    }];
  });
