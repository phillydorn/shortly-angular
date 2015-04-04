// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.invalid = false;

  $scope.signin = function () {
    if ($scope.user.password && $scope.user.username) {
      $scope.invalid=false;
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
      } else {
        $scope.invalid=true;
      }
  };

  $scope.signup = function () {
    if ($scope.user.password && $scope.user.username) {
      $scope.invalid=false;
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
      } else {
        $scope.invalid=true;
      }

  };

});
