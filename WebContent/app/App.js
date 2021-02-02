var shoppingCartApp = angular.module('shoppingCartApp', ['ngRoute']);

shoppingCartApp.config(function($routeProvider){
	
	$routeProvider.when("/",{
		templateUrl: 'view/homePage.html',
		controller: 'homeController'
	})
	.when("/shopping",{
		templateUrl: 'view/shoppingPage.html',
		controller: 'shoppingController'
	})
	.when("/checkout",{
		templateUrl: 'view/checkoutPage.html',
		controller: 'checkoutController'
	})
	.otherwise({redirectTo: '/'})
});
	
	