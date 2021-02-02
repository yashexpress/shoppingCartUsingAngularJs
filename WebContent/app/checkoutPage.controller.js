shoppingCartApp.controller('checkoutController', function($scope, $rootScope, cartService){
	
	var ctrl = this;
	$scope.titleMessage ='Ready to Checkout ?';
	$scope.tempCustomer = cartService.customer;
	
	//Further we can use this transaction object to submit the transaction
//	ctrl.transaction = {
//			details:{
//				totalAmount: 
//			}
//	};
	  
	  $scope.clearCart = function() {
	    $scope.cart.length = 0;
	  };
	  
	  $scope.removeItem = function(item) {
	    var index = $scope.cart.indexOf(item);
	    $scope.cart.splice(index, 1);
	  };
});