angular.module('Project1.controllers', [])
.controller('PaymentController', ['$scope', function($scope){
    let elements = stripe.elements();
    let card = elements.create('card');
    card.mount('#card-number');

    $scope.process = function(){
        stripe.createToken(card).then((result) => {
            if(result.error){
                $scope.error = result.error.message;
            }else{
                res.send(result.card);
            }
        });
    }
}]);