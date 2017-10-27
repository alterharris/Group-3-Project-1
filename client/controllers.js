angular.module("Project1.controllers", [])
.controller("PaymentController", ["$scope", "Payment", function($scope, Payment) {
    // let stripe = Stripe('pk_test_b1fniKtz3W7cUagVK8tthfuX');  
    let elements = stripe.elements();
    let card = elements.create('card');      
      card.mount("#card-number");
      $scope.process = function() {
        stripe.createToken(card).then(result => {
          if (result.error) {
            $scope.error = result.error.message;
            alert("There is a problem with your payment!")
          } else {
            let p = new Payment({
              token: result.token.id,
              amount: $scope.amount
            })

            p.$save(function(){
              alert("Thank you for your payment!")              
              $location.path('/');
            }, function(err){
              $scope.error = err.data;
            })
          }
        });
      };
    }
  ])
  .controller("ApparelController", ['$scope','Apparel', function($scope, Apparel) {
    $scope.products = Apparel.query({categoryid: 1});
   
  }])
  .controller("MiscController", ['$scope','Misc', function($scope, Misc) {
    $scope.products = Misc.query({categoryid: 11});
    
 }])
  //.controller("SingleProductController", ['$scope', '$RouteParams', ])
 //  /]*/
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
