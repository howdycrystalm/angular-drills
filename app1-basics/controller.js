angular.module('app')
    .controller('mainController', function($scope) {
      
      $scope.textToChange = "type in the field below and hit submit";
      
      $scope.userInput = function(textToChange) {
        $scope.textToChange = textToChange;
        $scope.freshText = '';
      }
      
    })