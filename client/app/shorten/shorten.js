angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.isValidUrl = function(url) {
    return url.match($scope.rValidUrl);
  }

  $scope.invalid = false;

  $scope.link = {};
  $scope.addLink = function() {
    if ($scope.isValidUrl($scope.link.url)) {
      Links.addLink($scope.link.url)
      .then(function(resp){
        $scope.link.url ='';
        $scope.invalid=false;
      })
    } else {
      $scope.invalid = true;
    }

  }

});
