(function () {
  'use strict';

  function Service($http) {

    function getUsers() {
      var request = {
        method: 'GET',
        url: '/json/users.json',
        headers: {
          'Accept': 'application/json'
        }
      };

      function success(response) {
        return response.data;
      }

      function errorGetUsers(error) {
        console.log(error.data);
      }

      return $http(request).then(success).catch(errorGetUsers);
    }

    function getDetails(id) {
      var request = {
        method: 'GET',
        url: 'json/' + id + '.json',
        headers: {
          'Accept': 'application/json'
        }
      };

      function success(response) {
        return response.data;
      }

      function errorGetDetails(error) {
        console.log(error.data);
      }

      return $http(request).then(success).catch(errorGetDetails);
    }

    var service = {
      getUsers: getUsers,
      getDetails: getDetails
    };

    return service;
  }

  Service.$inject = ['$http'];

  angular
    .module('app')
    .factory('UsersService', Service);
})();