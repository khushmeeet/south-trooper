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
            templateUrl: 'app/products/roundneck.html',
            controller: 'roundneckCtrl'
          }
        }
      })
      .state('products.pollo',{
        url: '/products/pollo',
        views:{
          'shirt@products':{
            templateUrl:'app/products/pollo.html',
            controller:'polloCtrl'
          }
        }
      })
  });
