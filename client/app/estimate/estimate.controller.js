'use strict';
(function(){

class EstimateComponent {
  constructor($scope) {
    $scope.product_required = [
      'Round Neck',
      'Pollo / Collar',
      'Fullsleeve / V-Neck',
      'Hoodies'
    ];
    $scope.size = ['A4', 'A3'];
  }
}

angular.module('southTrooperApp')
  .component('estimate', {
    templateUrl: 'app/estimate/estimate.html',
    controller: EstimateComponent
  });

})();
