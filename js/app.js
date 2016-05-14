// JavaScript Document
var pixoloapp = angular.module('pixoloapp', [
    'ngRoute',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

console.log("APP DOT JS");

pixoloapp.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'homeCtrl'
        })
        .when('/team', {
            templateUrl: 'views/template.html',
            controller: 'teamCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }
]);