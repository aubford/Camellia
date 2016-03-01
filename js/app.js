var app = angular.module('mean-tea-aubreyApp', ['ngRoute'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '../partials/index.html',
					controller: 'MainController'
				})
				.when('/checkout', {
					templateUrl: '../partials/checkout.html',
					controller: 'CartController'
				})
				.otherwise({redirectTo : '/'})
		})
