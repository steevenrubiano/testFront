'use strict';

/**
 * @ngdoc overview
 * @name
 * @description
 * # app
 *
 * Main module of the application.

 */

angular.module('app', [
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'pascalprecht.translate'
]);

angular.module('app').config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'scripts/controllers/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/:id', {
      template: '<info></info>'
    })
    .otherwise({
      redirectTo: '/'
    });


});


angular.module('app').config(['$locationProvider', '$translateProvider', '$translatePartialLoaderProvider',
  function ($locationProvider, $translateProvider, $translatePartialLoaderProvider) {


    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/i18n/{part}-{lang}.json'
    });

    $translateProvider.determinePreferredLanguage(function () {
      // Chrome devuelve "es" y IE y Firefox devuelven "es-ES" por lo que nos quedamos con los dos primeros caracteres para
      // seleccionar idioma
      var userLang = navigator.language || navigator.userLanguage;
      return userLang.substring(0, 2);
    });

    $translatePartialLoaderProvider.addPart('application');
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);
  }]);