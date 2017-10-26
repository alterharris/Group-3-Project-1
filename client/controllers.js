<<<<<<< HEAD
angular.module('Project1.controllers', [])
.controller('PaymentController', ['$scope', function($scope){
    let elements = stripe.elements();
    let card = elements.create('card');
    card.mount('#card-number');
=======
angular
  .module("Project1.controllers", [])
  .controller("PaymentController", [
    "$scope",
    function($scope) {
      let elements = stripe.elements();
      let card = elements.create("card");
      card.mount("#card-field");
>>>>>>> 7bea7f8daa492c83ad1fb5f6b5e0e832478e5958

      $scope.process = function() {
        stripe.createToken(card).then(result => {
          if (result.error) {
            $scope.error = result.error.message;
          } else {
            res.send(result.card);
          }
        });
      };
    }
  ])
  .controller("ContactController", [
    "$scope",
    "ContactForm",
    function($scope, ContactForm) {
      $scope.send = function() {
        let contact = new ContactForm({
          from: $scope.email,
          message: $scope.message
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
