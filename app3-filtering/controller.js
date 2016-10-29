angular.module("myApp")
 .controller('mainController', function($scope, myService) {

  $scope.people = myService.getData();
 })