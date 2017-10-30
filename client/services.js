angular.module("Project1.services", []).service("SEOService", [
  "$rootScope",
  function($rootScope) {
    this.setSEO = function(data) {
      $rootScope.seo = {};
      for (var p in data) {
        $rootScope.seo[p] = data[p];
      }
    };
  }
]);

var cartItems;

this.initCart = function() {
  if (localStorage) {
    var savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        cartItems = JSON.parse(savedCart);
      } catch (e) {
        console.log(e);
        cartItems = [];
      }
    } else {
      cartItems = [];
    }
  }
};

this.getCart = function() {
  return cartItems;
};

function saveCart() {
  if (localStorage) {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (e) {
      console.log(e);
    }
  }
}
