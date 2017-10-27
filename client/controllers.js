angular
  .module("Project1.controllers", [])
  .controller("PaymentController", [
    "$scope",
    "Payment",
    function($scope, Payment) {
      let elements = stripe.elements();
      let card = elements.create("card");
      card.mount("#card-number");
      $scope.process = function() {
        stripe.createToken(card).then(result => {
          if (result.error) {
            $scope.error = result.error.message;
            alert("There is a problem with your payment!");
          } else {
            let p = new Payment({
              token: result.token.id,
              amount: $scope.amount
            });

            p.$save(
              function() {
                alert("Thank you for your payment");
                $location.path("/");
              },
              function(err) {
                $scope.error = err.data;
              }
            );
          }
        });
      };
    }
  ])
  .controller("ApparelController", [
    "$scope",
    "Apparel",
    "SEOService",
    "$location",
    function($scope, Apparel, SEOService, $location) {
      $scope.products = Apparel.query({ categoryid: 1 });

      SEOService.setSEO({
        title: "Covalence Apparel",
        image:
          "http://" +
          $location.host() +
          "/images/covalence-store-apparel-hero.png",
        url: $location.url(),
        description: "Buy Awesome Covalence Apparel"
      });
    }
  ])
  .controller("MiscController", [
    "$scope",
    "Misc",
    "SEOService",
    "$location",
    function($scope, Misc, SEOService, $location) {
      $scope.products = Misc.query({ categoryid: 11 });

      SEOService.setSEO({
        title: "Covalence Stuff",
        image:
          "http://" +
          $location.host() +
          "/images/covalence-store-misc-hero.png",
        url: $location.url(),
        description: "Buy Awesome Covalence Stuff"
      });
    }
  ])
  //.controller("SingleProductController", ['$scope', '$RouteParams', ])
  //  /]*/
  .controller("ContactController", [
    "$scope",
    "ContactForm",
    "SEOService",
    "$location",
    function($scope, ContactForm, SEOService, $location) {
      $scope.send = function() {
        let contact = new ContactForm({
          from: $scope.email,
          message: $scope.message
        });

        SEOService.setSEO({
          title: "Contact Covalence Store",
          image: "http://" + $location.host() + "/images/Newlogo.png",
          url: $location.url(),
          description: "Contact the Covalence Store"
        });
        //makes a POST request to /api/contactform with a body with properties from and message
        contact.$save(
          function() {
            alert(
              "Thank you for your message! We will get back to you shortly."
            );
          },
          function(err) {
            console.log(err);
          }
        );
      };
    }
  ]);
