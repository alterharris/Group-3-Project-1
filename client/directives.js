angular.module('Project1.directives', [])
.directive('mainNavigation', [function() {
    return {
        templateUrl: 'directives/navbar.html',
        restrict: 'E',
        scope: {
            activePage: '='
        }
    };
}]);