'use strict';
(function(){

class ContactComponent {
  constructor($scope) {
    $scope.sendContact = function(){
      conole.log($scope.contact)
    }
  }
}

angular.module('southTrooperApp')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent
  });

})();
