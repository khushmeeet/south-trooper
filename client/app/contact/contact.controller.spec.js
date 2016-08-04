'use strict';

describe('Component: ContactComponent', function () {

  // load the controller's module
  beforeEach(module('southTrooperApp'));

  var ContactComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ContactComponent = $componentController('ContactComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
