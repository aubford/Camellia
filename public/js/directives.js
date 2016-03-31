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
