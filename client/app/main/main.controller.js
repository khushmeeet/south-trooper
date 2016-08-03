'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
  }
}

angular.module('southTrooperApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
