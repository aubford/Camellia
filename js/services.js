app.factory('teas', ['$http',function($http){
  return function(scope, name){
    $http.get('../data/data.json').then(function(results){
        var output = results.data

        output.forEach(function(e){
          if (e.inStock){
            e.inStock = "Yes"
          }else{
            e.inStock = "No"
          }

          e.price /= 100
          e.price = e.price.toString()

        })

        return scope[name] = output
    })
  }
}])

app.factory('bag', ['cart', function(cart){
  return {
    update: function(item, homePage){
      var exists = false
      cart.forEach(function(e){
        if (e._id==item._id){
          exists = true
        }
      })

      if(exists){
        cart.forEach(function(e){
          if (e._id==item._id){
            if(homePage){
              e.quantity += Number(item.quantity)
            }else{
              e.quantity = Number(item.quantity)    
            }
            e.subtotal = Number(item.quantity) * Number(e.price)
          }
        })
      }else{
        //!!!!How to make a duplicate of the object for pushing
        var pusher = Object.assign({},item)
        pusher.quantity = Number(item.quantity)
        pusher.subtotal = Number(item.quantity) * Number(item.price)
        cart.push(pusher)

      }
    }
  }
}])

app.value('cart', [])
