
app.controller('mainController',function($scope,$http, dataService, appsettings){

    $scope.mycart = [];

    dataService.getSliderData($scope);
    dataService.getProductsData($scope);
    dataService.getCategoriesData($scope);
     

     $scope.productClick = function(item){
        document.location = item.picture;
     }

     $scope.addToBasket = function(item){
        //1 - add service to save data
          var tmp = {};
          tmp.color = item.color;
          tmp.id = item._id;

          $http.post(appsettings.apiurl + 'addtocart', tmp)
         .success(function(data){
              console.log('data saved');
         });

        //2 - update user UI
        $scope.mycart.push(item);
     }
      
     
});

app.controller('test',function($scope,$http){

  $scope.test = 'test';
     
});