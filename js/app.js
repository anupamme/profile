var avenue = angular.module('avenue', ['ngRoute']);

avenue.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'templates/home.html',
            controller:'homeController'
        }).
         when('/detailedView', {
             templateUrl: 'templates/detailedView.html',
             controller: 'detailedViewController'
         }).
        when('/about', {
              templateUrl: 'templates/about.html',
              controller: 'aboutController'
          }).
        when ('/alchemy', {
            templateUrl: 'templates/detail-alchemy.html',
            controller: 'detailedViewController'
        }).
        otherwise({
        redirectTo: '/'
        });
});

avenue.controller("homeController", function () {

});

avenue.controller("detailedViewController", function () {
    when ('/alchemy', {
        templateUrl: 'templates/detail-alchemy.html',
        controller: 'detailedViewController'
    }).
    otherwise({
        redirectTo: '/'
    });
});