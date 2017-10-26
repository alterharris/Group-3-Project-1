angular
  .module("Project1.factories", [])
  .factory("Category", [
    "$resource",
    function($resource) {
      return $resource("/api/categories/:id");
    }
  ])
  .factory("Payment", ['$resource', function($resource){
    return $resource('/api/payment/:id', {id: '@id'})
  }])
  .factory("ContactForm", [
    "$resource",
    function($resource) {
      return $resource("/api/contactform/:id", { id: "@id" });
    }
  ]);
