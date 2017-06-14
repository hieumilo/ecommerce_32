function Auth($http, API_URL, $q, $auth) {

    return {
        isAuthenticated: function() {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                deferred.reject();
            }

            return deferred.promise;
        },

        skipIfLoggedIn: function() {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }

            return deferred.promise;
        },

        isAdmin: function(){
            var deferred = $q.defer();
            var user = angular.fromJson(localStorage.getItem("User"));
            if (user.is_admin) {
                deferred.resolve();
            } else {
                deferred.reject();
            }

            return deferred.promise;
        },

        profile: function() {
            var deferred = $q.defer();
            $http.get(API_URL + 'auth/me')
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (error) {
                deferred.reject(error);
            });
            
            return deferred.promise;
        },

        getCurrentUser: function() {
            return angular.fromJson(localStorage.getItem("User"));
        },

        checkAdmin: function() {
            var user = angular.fromJson(localStorage.getItem("User"));
            if (user.is_admin) {
                return true;
            } else {
                return false;
            }
        }
    };
};
