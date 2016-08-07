'use strict';

angular.module('southTrooperApp')
  .controller('polloCtrl', function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });
