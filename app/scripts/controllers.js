
app.controller('mainController',function($scope, $rootScope, $http, dataService, appsettings){

    if(!$rootScope.mycart) {
      $rootScope.mycart = []
    }
    $scope.mycart = $rootScope.mycart;
    
    $scope.quantity = 0;
   
   $scope.test = 'mainController';

    dataService.getSliderData($scope);
    dataService.getProductsData($scope);
    dataService.getCategoriesData($scope);
     
     $scope.cartTotal = 0;

     $scope.productClick = function(item){
        document.location = item.picture;
     }

     $scope.addToBasket = function(item){
        //1 - add service to save data
          var tmp = {};
        
         

          $http.post(appsettings.apiurl + 'addtocart', tmp)
         .success(function(data){
              console.log('data saved');
         });

        //2 - update user UI
        $rootScope.mycart.push(item);
        
     }


});



app.controller('cartCtrl',function($scope, $rootScope, $http){

  $scope.test = 'cartCtrl';

     $scope.removeItem = function(index) {
    $rootScope.mycart.splice(index,1);
  };


   $scope.total = function(){
      var total = 0;
      angular.forEach($rootScope.mycart, function(item){
        total += item.q * item.price;
      })
      $scope.cartTotal = total;
  }

    $scope.total();

     
});




app.controller('rootController',function($scope,$http){

  

     
});

