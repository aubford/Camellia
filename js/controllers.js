app.controller('MainController', ['$scope', 'cart', 'teas', 'bag', function($scope, cart, teas, bag){
      $scope.routes="HTML and Routes"
      $scope.working='Working'
      teas($scope, "teas")
      $scope.count = cart.length
      $scope.pred="-"

      $scope.bagAdd =function(item){
        bag.update(item, true)
        item.quantity = '1'

        //!!!!Why doesn't this update automatically
        $scope.count = cart.length
      }

    }])

app.controller('CartController', ['$scope', "bag", "cart", function($scope, bag, cart){
    $scope.cart=cart

    $scope.remove= function(item){
      cart.forEach(function(e,i){
        if(e._id==item._id){
          cart.splice(i,1)
        }
      })
    $scope.cart=cart
    }
    //!!!!is this best way to get cart provider data into view?
    $scope.cartUpdate = function(item){
        bag.update(item, false)
        $scope.price= cart.price
    }
}])
