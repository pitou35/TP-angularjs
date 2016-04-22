'use strict';

/**
 * @ngdoc overview
 * @name tpApp
 * @description
 * # tpApp
 *
 * Main module of the application.
 */
angular
  .module('tpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
var dataApp = angular.module('data', ['ngResource'])  
dataApp.controller('controlListePerson', controlListePerson); //Associé un controleur à une fonnction

//Fonction associé à la ng-controler: va permettre d'associer un model au controleur et les différents traitements possibles
function  controlListePerson($scope, $http, $log){
	//Ici on fait juste une requete pour récuperer la liste de résultat
    $http({
        method: 'GET',
        url: "http://localhost:9000/rest/rest-opower/dataPerson",
    }).then(function successCallback(response) {
			console.log(response.data);
			$scope.listPerson= response.data.personne;
    });
}
