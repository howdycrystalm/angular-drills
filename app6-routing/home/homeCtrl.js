angular.module('app6')
  .controller('homeCtrl', function($scope, petsService) {
    $scope.title = 'Home!';
    
    petsService.getPets().then(function(response) {
      $scope.pets = response.data;
    });
  })
  