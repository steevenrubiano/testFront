(function () {
  'use strict';

  function Directive() {

    var directive = {
      bindToController: true,
      controller: ControllerController,
      controllerAs: 'vm',
      restrict: 'E',
      templateUrl: 'scripts/directives/users.directive/users.html',
      scope: {

      }
    };
    return directive;
  }

  function ControllerController($scope, UsersService) {
    function success(data) {
      $scope.users = data.users;
    }
    UsersService.getUsers().then(success);
  }

  ControllerController.$inject = ['$scope', 'UsersService'];

  angular
  .module('app')
  .directive('users', Directive);
})();