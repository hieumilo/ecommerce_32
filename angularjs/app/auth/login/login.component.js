App
.controller('LoginCtrl', function($scope, $state, $auth, auth) {
    $scope.login = function() {
        var credentials = {
            email: $scope.email,
            password: $scope.password
        }
        $auth.login(credentials)
        .then(function() {
            return auth.profile();
        })
        .then(function(response) {
            localStorage.setItem("User", JSON.stringify(response.user));
            $state.go('home.page', {}, {reload: true});
        })
    };

    $scope.authenticate = function(provider) {
        $auth.authenticate(provider)
        .then(function() {
            return auth.profile();
        })
        .then(function(response) {
            localStorage.setItem("User", JSON.stringify(response.user));
            $state.go('home.page', {}, {reload: true});
        })
    };
});
