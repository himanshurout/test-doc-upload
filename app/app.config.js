'use strict';

angular.
  module('allerganApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/documents', {
          template: '<document-container></document-container>'
        }).
        otherwise('/documents');
    }
  ]);
