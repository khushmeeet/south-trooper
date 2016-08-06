'use strict';
(function() {

    class ContactComponent {
      constructor($scope, $mdDialog, contactService) {
        $scope.sendContact = function(form,ev) {
          if (form.$valid) {
            var contact = {
              name: $scope.name,
              email: $scope.email,
              subject: $scope.subject,
              message: $scope.message
            }
            console.log(contact);
            contactService.save(contact,
              function success(response) {
                console.log(response);
              },
              function fail(error) {
                console.log(error)
              });
              $scope.name='';
              $scope.email='';
              $scope.subject='';
              $scope.message='';
            /*$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
            $mdDialog.show(
              $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('This is an alert title')
              .textContent('You can specify some description text in here.')
              .ariaLabel('Alert Dialog Demo')
              .ok('Got it!')
              .targetEvent(ev)
          );*/
          }
        }
    }
}
      angular.module('southTrooperApp')
        .component('contact', {
          templateUrl: 'app/contact/contact.html',
          controller: ContactComponent
        });

    })();
