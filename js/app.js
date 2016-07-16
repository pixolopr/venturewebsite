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
])
    .filter('timestampToISO', function () {
        return function (input) {
            input = new Date(input).toISOString();
            return input;
        };
    })
    .filter('imagepath', function () {
        return function (input) {
            return "http://venturestartups.in/vsBackend/uploads/" + input;
        };
    })
    .filter('capitalize', function () {
        return function (input, all) {
            var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
            return (!!input) ? input.replace(reg, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }) : '';
        }
    })
    .filter('reverse', function () {
        return function (items) {
            return items.slice().reverse();
        };
    })
    .filter('slice', function () {
        return function (arr, start, end) {
            return (arr || []).slice(start, end);
        };
    })
    .directive('errSrc', function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });
            }
        }
    });