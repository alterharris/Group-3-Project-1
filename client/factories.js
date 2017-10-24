angular.module('Project1.factories', [])

.factory('Category', ['$resource', function($resource) {
    return $resource('/api/categories/:id');
}])