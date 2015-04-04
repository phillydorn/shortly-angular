angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  //$scope.invalid = false;

  $scope.link = {};
  $scope.addLink = function() {
    Links.addLink($scope.link.url)
    .then(function(resp){
      $scope.link ='';
      if (resp === false){

      }
    })
  }

});
