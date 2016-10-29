angular.module('app6', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
          templateUrl: 'home/home.html',
          controller: 'homeCtrl',
          url: '/'
          
        })
        .state('signUp', {
          templateUrl: 'signUp/signup.html',
          controller: 'signupCtrl',
          url: '/signUp'
        })
        .state('details', {
          templateUrl: 'details/details.html',
          controller: 'detailsCtrl',
          url: '/details/:id' //this helps pass the id parameters when we hover of a dogs pic in home
          })
          
        });
