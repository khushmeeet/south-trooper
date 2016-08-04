'use strict';

angular.module('southTrooperApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        template: '<contact></contact>'
      });
  });
