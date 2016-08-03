'use strict';

angular.module('southTrooperApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        template: '<products></products>'
      });
  });
