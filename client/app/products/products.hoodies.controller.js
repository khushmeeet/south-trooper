'use strict';

angular.module('southTrooperApp')
  .controller('hoodiesCtrl', function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });
