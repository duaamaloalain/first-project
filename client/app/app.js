angular.module('stickman', [
  'stickman.services',
  'stickman.auth',
  'stickman.listVideo',
  'ngRoute',
  'ngAnimate',
  'ngMap',
  'ngMaterial'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
     .when('/listVideo', {
      templateUrl: 'app/listVideo/listVideo.html',
      controller: 'listVideoController'
    })

     .otherwise({
      redirectTo : "/"
     });
})