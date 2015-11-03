
app.controller('mainController',function($scope,$http, dataService, appsettings){

    $scope.mycart = [];
    $scope.quantity = 0;
   

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
      
     $scope.removeItem = function(index) {
    $scope.mycart.splice(index,1);
  },
  $scope.total = function(){
      var total = 0;
      angular.forEach($scope.mycart, function(item){
        total += item.q * item.price;
      })
         return total;
  }
});

app.controller('test',function($scope,$http){

  $scope.test = 'test';

     
});

