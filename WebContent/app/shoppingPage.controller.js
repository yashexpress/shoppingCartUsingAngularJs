shoppingCartApp
.controller('shoppingController', function ($scope, $rootScope, cartService) {
  
	var ctrl = this;
	$scope.titleMessage="Shopping Cart";
	$scope.customer = cartService.customer;
	ctrl.itemFound = false;
  $scope.inventory = [
    { id :  1, itemName : "iPhone X", description : "Cellphones",   price :  1110.00, quantity : 0 },
    { id :  2, itemName : "Samsung Galaxy 6", description : "Cellphones",   price :   792.99, quantity : 0 },
    { id :  3, itemName : "Sony 4K TV",   description : "Television",     price :   750.00, quantity : 0 },
    { id :  4, itemName : "Samsung LED TV",   description : "Television",       price :  500.50, quantity : 0 },
    { id :  5, itemName : "Couch",        description : "Furniture",          price :  499.99, quantity : 0 },
    { id :  6, itemName : "Office desk",        description : "Furnituree",            price :  50.00, quantity : 0 },
    { id :  7, itemName : "Men shirts", description : "Clothing",  price :  49.99, quantity : 0 },
    { id :  8, itemName : "TIDE detergent", description : "Home essentials",  price :  10.00, quantity : 0 },
    { id :  9, itemName : "Curtain",         description : "Home essential",        price : 59.99, quantity : 0 }
  ];
  
  $scope.cart = [];
  
  
  //check if item is already present in cart
  var findItemById = function(items, id) {
	  for(var i = 1; i<= items.length; i++){
		  if(item.id === id)
			  ctrl.itemFound = true;
		  break;
	  }
	  return ctrl.itemFound;
  };
  
  //Adding item to cart
  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.id);
    if (found) {
    	found.quantity += itemToAdd.quantity;
    }
    else {
    	$scope.cart.push(angular.copy(itemToAdd));
    	}
    	$rootScope.cart = $scope.cart;
  };
  
  //fetch the total cost of all products including its quantities
  $scope.getTotal = function() {
	  var sum=0;
	  for(var i = 0; i < $scope.cart.length; i++){
		  sum = sum + ($scope.cart[i].quantity * $scope.cart[i].price);
	  }
    console.log('total: ' + sum);
    return sum;
  };
  
});
