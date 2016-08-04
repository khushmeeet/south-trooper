'use strict';
(function(){

class QuoteComponent {
  constructor($scope) {
  }
}

angular.module('southTrooperApp')
  .component('quote', {
    templateUrl: 'app/quote/quote.html',
    controller: QuoteComponent
  });

})();
