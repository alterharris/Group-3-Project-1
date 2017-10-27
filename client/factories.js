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
 .factory("Misc", ["$resource",  function($resource) {
    return $resource('/api/products/category/:categoryid', {categoryid:' @categoryid'});
 }]);