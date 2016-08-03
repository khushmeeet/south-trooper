'use strict';

angular.module('southTrooperApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('quote', {
        url: '/quote',
        template: '<quote></quote>'
      });
  });
