'use strict';
(function() {

  class QuoteComponent {
    constructor($scope, quoteService, $mdToast, ImageService) {
      $scope.product_required = [
        'Round Neck',
        'Pollo / Collar',
        'Fullsleeve / V-Neck',
        'Hoodies'
      ];
      $scope.imageSelected = false;

      $scope.readFileImg = function(files) {
        //$scope.user.photo = undefined;
        if (files && files.length) {
          ImageService.readImageFile(files[0], function(err, img) {
            if (err) {
              var toast = $mdToast.simple()
                .textContent('Image not saved')
                .action('Error')
                .highlightAction(false)
                .position('top')
                .theme('error-toast');
              return $mdToast.show(toast);
            }
            $scope.imageSelected = img;
          });
        }
      };


      var quote = {};

      $scope.getQuote = function(form1, form2) {
        if (form1.$valid) {
          quote.name = $scope.name;
          quote.email = $scope.email;
          quote.org = $scope.org;
          quote.phone = $scope.phone;
          quote.address = $scope.address;
        }
        if (form2.$valid) {
          console.log($scope.file);
          console.dir($scope.s);
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
          function pass(success) {
            console.log(success);
          },
          function fail(error) {
            console.log(error);
          }
        );
        $scope.imageSelected = false;

      }
    }
  }

  angular.module('southTrooperApp')
    .component('quote', {
      templateUrl: 'app/quote/quote.html',
      controller: QuoteComponent
    });

})();
