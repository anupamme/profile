 (function (angular) {
var avenue = angular.module('avenue', ['ngRoute']);

avenue.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        }).
        when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'aboutController'
        }).
        when('/detailedView/:id', {
            templateUrl: 'templates/detailView.html',
            controller: 'detailedViewController'
        }).
        when('/Error', {
        templateUrl: 'templates/error.html'
    }).
        otherwise({
            redirectTo: '/'
        });
});

avenue.controller("homeController", ['$scope', '$http', function ($scope, $http) {
    $http.get("templates/homepage.json", { cache: true }).success(function (data) {
        $scope.items = data.items;
    }).error(function (data) {
        $window.location.href = '#/Error';
    });
}]);

avenue.controller("detailedViewController", ['$scope', '$http', '$window', '$routeParams', function ($scope, $http, $window, $routeParams) {
 
    $scope.item = [];
    $scope.url = 'templates/detailedView.json';
    $scope.getIframeSrc = function (videoURL) {
        return 'videoURL';
    };

    $scope.fetchContent = function () {
        $http.get($scope.url, { cache: true }).success(function (data) {
            for (var i = 0; i < data.items.length; i++) {
                if (data.items[i].detailedLinkID == $routeParams.id) {
                    $scope.item = data.items[i];
                    // setCookie("html_player", 1, 365);
                    break;
                }
            }
        }).error(function (data) {
            $window.location.href = '#/Error';
        });


    }
    $scope.fetchContent();

    $http.get("templates/homepage.json", { cache: true }).success(function (data) {
        $scope.list = data.items;
    }).error(function (data) {
        $scope.noDataFound = "No data found";
       // $window.location.href = '#/Error';
    });
}]);

avenue.filter("nl2br", ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);


avenue.filter('youtubeEmbedUrl', function ($sce) {
    return function (videoURL) {
        return $sce.trustAsResourceUrl(videoURL);
    };
});

 })(window.angular);