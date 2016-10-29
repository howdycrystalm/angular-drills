angular.module('arrayApp')
  .controller('arrayController', function($scope, arrayService) {
    $scope.data = arrayService.getData();

    $scope.addNewPerson = function(name, email) {
      arrayService.addNewPerson({
        name: name,
        email: email
      });
    }


  })
