angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  //angular.extend($scope,require('/server/links/linkController.js'))

  $scope.link = {};
  $scope.addLink = function() {
    Links.addLink($scope.link)
    .then(function(link){
      // $scope.link.data = link
    })
  }

});
