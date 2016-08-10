'use strict';

angular.module('southTrooperApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('estimate', {
        url: '/estimate',
        template: '<estimate></estimate>'
      });
  });
