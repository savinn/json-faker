
app.config(function($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/category');

    //viewName@stateName

    $stateProvider.state('shop', {
      abstract: true,
      views: {
       page: {
         template: '<h2>Welcome to app!</h2>'
       }
     }
   })
    .state("shop.cart", {
      url: "/cart",
      views : {
        "page@" : {
          // controller : 'vocAddCtrl',
           templateUrl: 'templates/cart.html'
          //template: '<h2>shop.cart</h2>'
        }
      }

    })
    .state("shop.product", {
      url: "/product/{productId}",
      views : {
        "page@" : {
          templateUrl: 'templates/product_details.html'
        }
      }
    })
    .state("shop.category", {
      url: "/category/{categoryID}",
      views : {
        "page@" : {
           templateUrl: 'templates/main-content.html'
        }
      }
    })



  });
