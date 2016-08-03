'use strict';

(function() {

class MainController {

  constructor($scope) {
  }
}

angular.module('southTrooperApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
