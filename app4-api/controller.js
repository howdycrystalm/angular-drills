angular.module('apiApp')
  .controller('smurfController', function($scope, smurfice) {
    
    
      smurfice.getSmurfs().then(function(smurfData) {
        $scope.smurfs = smurfData;
    });
  })