'use strict';

angular.module('southTrooperApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        template: '<products></products>'
      })
      .state('products.roundneck',{
        url: '/products/roundneck',
        views:{
          'shirt@products':{
            templateUrl: 'roundneck.html',
            controller: 'roundneckCtrl'
          }
        }
      })
  });
