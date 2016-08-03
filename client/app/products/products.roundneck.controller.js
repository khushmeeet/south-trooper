'use strict';

angular.module('southTrooperApp')
  .controller('roundneckCtrl', function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });
