(function () {
  'use strict';

  function Directive() {

    var directive = {
      bindToController: true,
      controller: ControllerController,
      controllerAs: 'vm',
      restrict: 'E',
      templateUrl: 'scripts/directives/info.directive/info.html',
      scope: {

      }
    };
    return directive;
  }

  function ControllerController($scope, UsersService, $routeParams) {
    function success(data) {
      $scope.info = data.data;
    }
    UsersService.getDetails($routeParams.id).then(success);
  }

  ControllerController.$inject = ['$scope', 'UsersService', '$routeParams'];

  angular
    .module('app')
    .directive('info', Directive);
})();