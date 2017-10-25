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
      return $resource("/api/contactforms", { id: "@id" });
    }
  ]);
