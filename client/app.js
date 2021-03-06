angular
  .module("Project1", [
    "Project1.controllers",
    "Project1.factories",
    "Project1.services",
    "Project1.directives",
    "ngRoute",
    "ngResource"
  ])
  .config([
    "$routeProvider",
    "$locationProvider",
    function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider
        .when("/", {
          templateUrl: "views/welcome.html",
          controller: ""
        })
        .when("/payment", {
          templateUrl: "views/payment.html",
          controller: "PaymentController"
        })
        .when("/apparel", {
          templateUrl: "views/product_list.html",
          controller: "ApparelController"
        })
        .when("/misc", {
          templateUrl: "views/misc.html",
          controller: "MiscController"
        })
        .when("/single_product/:id", {
          templateUrl: "views/single_product.html",
          controller: "SingleProductController"
        })
        .when("/contact", {
          templateUrl: "views/contact.html",
          controller: "ContactController"
        })
        .when("/checkout", {
          templateUrl: "views/checkout.html",
          controller: ""
        });
    }
  ])
  .run([
    "$rootScope",
    "$location",
    function($rootScope, $location) {
      $rootScope.$on("$routeChangeStart", function(
        event,
        nextRoute,
        previousRoute
      ) {
        if (
          nextRoute.$$route &&
          nextRoute.$$route.requiresLogin &&
          !UserService.isLoggedIn()
        ) {
          event.preventDefault();
          UserService.loginRedirect();
        }
      });
    }
  ]);
