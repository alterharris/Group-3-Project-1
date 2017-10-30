angular
  .module("Project1.factories", [])
  .factory("Category", [
    "$resource",
    function($resource) {
      return $resource("/api/categories/:id");
    }
  ])
  .factory("ContactForm", [
    "$resource",
    function($resource) {
      return $resource("/api/contactform/:id", { id: "@id" });
    }
  ])
   .factory("Apparel", ["$resource",
  function($resource) {
    return $resource('/api/products/category/:categoryid', {categoryid: '@categoryid'});
  }]) 
  .factory("SingleProduct", ["$resource", function($resource){
    return $resource('/api/products/:id', {id:'@id'});
  }])
 .factory("Misc", ["$resource",  function($resource) {
    return $resource('/api/products/category/:categoryid', {categoryid:' @categoryid'});
 }])
 .factory("Payment", ['$resource', function($resource){
   return $resource('/api/payment/:id', {id: '@id'})
 }]);