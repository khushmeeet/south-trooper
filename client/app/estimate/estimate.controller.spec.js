'use strict';

describe('Component: EstimateComponent', function () {

  // load the controller's module
  beforeEach(module('southTrooperApp'));

  var EstimateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EstimateComponent = $componentController('EstimateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
