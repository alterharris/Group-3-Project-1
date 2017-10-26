angular.module("Project1.controllers", []).controller("PaymentController", ["$scope", function($scope) {
      let elements = stripe.elements();
      let card = elements.create("card");
      card.mount("#card-field");
      $scope.process = function() {
        stripe.createToken(card).then(result => {
          if (result.error) {
            $scope.error = result.error.message;
            alert("There is a problem with your payment!")
          } else {
            res.send(result.card);
            alert("Thank you for your payment!")
          }
        });
      };
    }
  ])
  .controller("ContactController", ["$scope", "ContactForm", function($scope, ContactForm) {
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
    }]);
