'use strict';
(function() {

    class EstimateComponent {
      constructor($scope) {
        $scope.product_required = [
          'Round Neck',
          'Pollo / Collar',
          'Fullsleeve / V-Neck',
          'Hoodies'
        ];
        $scope.size = ['A4', 'A3'];
        $scope.getEstimate = function(form) {
          var base_price;
          if (form.$valid) {
            var type = $scope.type;
            if (type === 'Round Neck')
              base_price = 130;
            else if (type === 'Pollo / Collar')
              base_price = 150;
            else if (type === 'Fullsleeve / V-Neck')
              base_price = 150;
            else if (type === 'Hoodies')
              base_price = 150;

            if ($scope.fprint){
                base_price += ($scope.fprint * $scope.fcolor) + 5;
            }
            else if ($scope.fembroidery){
                base_price += ($scope.fembroidery * $scope.fcolor) + 5;
            }

            if ($scope.bprint){
                base_price += ($scope.bprint * $scope.bcolor) + 5;
            }
            else if ($scope.bembroidery){
                base_price += ($scope.bembroidery * $scope.bcolor) + 5;
            }

            if ($scope.lsprint){
                base_price += ($scope.lsprint * $scope.lscolor) + 5;
            }
            else if ($scope.lsembroidery){
                base_price += ($scope.lsembroidery * $scope.lscolor) + 5;
            }

            if ($scope.rsprint){
                base_price += ($scope.rsprint * $scope.rscolor) + 5;
            }
            else if ($scope.rsembroidery){
                base_price += ($scope.rsembroidery * $scope.rscolor) + 5;
            }
            console.log(base_price);
            $scope.ppu = base_price;
            console.log($scope.quantity);
            base_price = base_price * $scope.quantity;
            console.log(base_price)
            $scope.total = base_price;

            }
          }
        }
      }

      angular.module('southTrooperApp')
        .component('estimate', {
          templateUrl: 'app/estimate/estimate.html',
          controller: EstimateComponent
        });

    })();
