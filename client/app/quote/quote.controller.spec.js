'use strict';

describe('Component: QuoteComponent', function () {

  // load the controller's module
  beforeEach(module('southTrooperApp'));

  var QuoteComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    QuoteComponent = $componentController('QuoteComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
