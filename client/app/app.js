//// App module
//    -Home page is for when users first sign up and enter 3 interests
//    -History has not been implemented yet
//    -Auth is for signing up and signing in
//    -Services provide factories for authentication and adding items
//
angular.module('associations', [
  'associations.home',
  'associations.history',
  'associations.auth',
  'associations.services',
  'ngRoute'
])
//// Front-end routes
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: '/client/app/auth/signin.html',
      controller: 'AuthController',
      authenticate: false
    })
    .when('/signup', {
      templateUrl: '/client/app/auth/signup.html',
      controller: 'AuthController',
      authenticate: false
    })
    .when('/home', {
      templateUrl: '/client/app/home/home.html',
      controller: 'HomeController',
      authenticate: true
    })
    .when('/history', {
      templateUrl: '/client/app/history/history.html',
      controller: 'HistoryController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/home'
    });;
});
