app.controller('MainController', ['$scope', 'cart', 'teas', 'bag', function($scope, cart, teas, bag){
      $scope.routes="HTML and Routes"
      $scope.working='Working'
      teas($scope, "teas")
      $scope.count = cart.reduce(function(sum,e){
        return sum + e.quantity
      },0)
      $scope.pred="-"

      $scope.bagAdd =function(item){
        bag.update(item, true)

        item.quantity = '1'

        $scope.count = cart.reduce(function(sum,e){
          return sum + e.quantity
        },0)
      }

    }])

app.controller('CartController', ['$scope', "bag", "cart", function($scope, bag, cart){
    $scope.cart=cart

    $scope.totalIt = function(){
      return cart.reduce(function(sum, e){
        return sum + e.subtotal
      },0)
    }

    $scope.total = $scope.totalIt()


    $scope.remove= function(item){
      cart.forEach(function(e,i){
        if(e._id==item._id){
          cart.splice(i,1)
        }
      })
    $scope.total = $scope.totalIt()
    }
    $scope.cartUpdate = function(item, that){
      console.log(that);
      if (item.quantity > 0){
        bag.update(item, false)
        $scope.price= cart.price
      }else{
        $scope.remove(item)
      }
      $scope.total = $scope.totalIt()
    }

    $scope.placeOrder = function(){
      cart.splice(0,cart.length)
      $scope.total = $scope.totalIt()
    }
}])
