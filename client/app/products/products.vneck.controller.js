'use strict';

angular.module('southTrooperApp')
  .controller('vneckCtrl', function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });
