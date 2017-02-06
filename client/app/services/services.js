

.factory('Auth', function ($http, $location, $window ) {

	var signup = function (user) {
		return $http({
		method : "POST",
		url : '/api/newUser',
		data : user
		}).then(function (resp) {
		return resp.data.token
		});
	}
	var signin = function (user) {
		return $http({
		method: 'POST',
		url: '/api/signin',
		data: user
		})
		.then(function (resp) {
		return resp.data.token;
		});
	}
	var signout = function () {
		$window.localStorage.removeItem('com.stickMan');
		$location.path('/signin');
	}

	return {
		signin: signin,
		signup: signup,
		signout: signout
	}
	
})
