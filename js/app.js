// JavaScript Document
var pixoloapp = angular.module('pixoloapp', [
    'ngRoute',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'wu.masonry'
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
        })
        .when('/videos', {
            templateUrl: 'views/template.html',
            controller: 'videosCtrl'
        })

        .when('/newsletters', {
            templateUrl: 'views/template.html',
            controller: 'newslettersCtrl'
        })
            
         .when('/events', {
            templateUrl: 'views/template.html',
            controller: 'eventsCtrl'
        })
        
          .when('/photos', {
            templateUrl: 'views/template.html',
            controller: 'photosCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }
]);