var app = angular.module('my-app',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'main.html',
    controller: 'MainController'
  })
  .when('/:movieID', {
    templateUrl: 'details.html',
    controller: 'DetailsController'
  })
});

app.controller('MainController', function ($scope, $http){
  $http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5')
  .success(function(data){
    $scope.data = data;
    console.log(data);


  })
});

app.controller('DetailsController', function ($scope, $routeParams, $http){
  $scope.movieID = $routeParams.movieID;
  $http.get('http://api.themoviedb.org/3/movie/' + $routeParams.movieID + '?api_key=fec8b5ab27b292a68294261bb21b04a5')
  .success(function(data){
    $scope.data = data;
    console.log(data);
  });
});
