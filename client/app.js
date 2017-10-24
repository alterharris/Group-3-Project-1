angular.module('Project1', [
    'Project1.controllers',
    'Project1.factories',
    'Project1.services',
    'Project1.directives',
    'ngRoute',
    'ngResource'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            
          
            .when('/', {
                templateUrl: 'views/welcome.html',
                controller: ''
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',

            })
            .when('/products', {
                templateUrl: 'views/product_list.html',
                controller: 'getAllProductsController'
            })
            .when('/single_product', {
                templateUrl: 'views/single_product.html',
                controller: ''
            })
            .when('/checkout', {
                templateUrl: 'views/checkout.html',
                controller: ''
            })
          
    }])

    // .run(['$rootScope', '$location', 'UserService', function ($rootScope, $location, UserService) {
    //     $rootScope.$on('$routeChangeStart', function (event, nextRoute, previousRoute) {
    //         if (nextRoute.$$route && nextRoute.$$route.requiresLogin && !UserService.isLoggedIn()) {
    //             event.preventDefault();
    //             UserService.loginRedirect();
    //         }
    //     });
    // }]);