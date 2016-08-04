'use strict';
(function(){

class ContactComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('southTrooperApp')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent
  });

})();
