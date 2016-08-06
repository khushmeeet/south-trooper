'use strict';
(function() {

  class QuoteComponent {
    constructor($scope, quoteService) {
      $scope.product_required = [
        'Round Neck',
        'Pollo / Collar',
        'Fullsleeve / V-Neck',
        'Hoodies'
      ];
      var quote = {}

      $scope.getQuote = function(form1, form2) {
        if (form1.$valid) {
          quote.name = $scope.name;
          quote.email = $scope.email;
          quote.org = $scope.org;
          quote.phone = $scope.phone;
          quote.address = $scope.address;
        }
        if (form2.$valid) {
          console.log($scope.s);
          quote.product_required = $scope.type;
          quote.size_quantity = {};
          quote.size_quantity.s = $scope.s;
          quote.size_quantity.m = $scope.m;
          quote.size_quantity.l = $scope.l;
          quote.size_quantity.xl = $scope.xl;
          quote.size_quantity.xxl = $scope.xxl;
          quote.upload = $scope.needhelp;
          quote.quantity = $scope.quantity;
        }
        quoteService.save(quote,
          function success(success) {
            console.log(success);
          },
          function fail(error) {
            console.log(error);
          }
        );
      }
    }
  }

  angular.module('southTrooperApp')
    .component('quote', {
      templateUrl: 'app/quote/quote.html',
      controller: QuoteComponent
    });

})();
