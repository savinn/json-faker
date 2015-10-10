var app = angular.module('myApp',[]);


app.controller('mainController',function($scope,$http){
     $http.get('http://localhost:3000/products')
     .success(function(data){
          $scope.myProducts= data;
     });
      
   $http.get('http://localhost:3000/slider')
     .success(function(data){
          $scope.mySlider= data;
     });
      
     

     $http.get('http://localhost:3000/categories')
     .success(function(data){
          $scope.myCategories= data;
     });
      
    
     
});

app.directive('mainContent', function() {
  return {
      restrict: 'E',
      templateUrl: 'slider.html',
      templateUrl: 'main-content.html',
      templateUrl: 'sideBar.html',
      templateUrl: 'footer.html',
      templateUrl: 'header.html',
  };
});

