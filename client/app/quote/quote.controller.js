'use strict';
(function(){

class QuoteComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('southTrooperApp')
  .component('quote', {
    templateUrl: 'app/quote/quote.html',
    controller: QuoteComponent
  });

})();
