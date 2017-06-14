App
.controller('HeaderCtrl', function($auth, auth, $scope) {
    auth.isAuthenticated()
    .then(function() {
        $scope.isAuthenticated = true;
        var user = auth.getCurrentUser();
        $scope.username = user.name;
    });
});
