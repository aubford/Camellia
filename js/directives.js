app.directive('auHeader', function(){
  return {
    scope: {
    },
    controller: ['$scope', function($scope){
      $scope.bag = "Bag Empty"
    }],
    templateUrl: '../partials/header.html'
    }
})

app.directive('link', function(){
  return {
    link: function(scope, element, attrs) {
      element.click(function(){
      })
    }
  }
})
