app.service('dataService', function($http, appsettings){

  var myFunctions = {};

  /**
  slider data
  */
  myFunctions.getSliderData = function(s){

    $http.get(appsettings.apiurl + 'slider')
       .success(function(data){
            s.mySlider= data;

       });
  }
/** products data **/
myFunctions.getProductsData = function(p){

    $http.get(appsettings.apiurl + 'products')
       .success(function(data){
            p.myProducts= data;

       });
  }
  /** categories data **/
myFunctions.getCategoriesData = function(c){

    $http.get(appsettings.apiurl + 'categories')
       .success(function(data){
            c.myCategories= data;

       });
  }
  return myFunctions;
});