angular.module('app6')
  .controller('detailsCtrl', function($scope, petsService, $stateParams) {
    $scope.title = 'Details!';
    
    petsService.getOnePet($stateParams.id).then(function(response) {
      $scope.pet = response.data;
    });
  })
  