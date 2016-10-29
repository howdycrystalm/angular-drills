angular.module('apiApp')
  .service('smurfice', function($http) {
    var smurfUrl = 'http://smurfs.devmounta.in/smurfs/';
    
    this.getSmurfs = function() {
      return $http.get(smurfUrl).then(function(smurfResponse) {
        return smurfResponse.data;
      })
    }
  })