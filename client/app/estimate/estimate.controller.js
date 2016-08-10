'use strict';
(function(){

class EstimateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('southTrooperApp')
  .component('estimate', {
    templateUrl: 'app/estimate/estimate.html',
    controller: EstimateComponent
  });

})();
