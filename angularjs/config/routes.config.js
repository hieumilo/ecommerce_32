function RoutesConfig($stateProvider, $urlRouterProvider) {

    var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
        var deferred = $q.defer();

        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
        }

        return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
        var deferred = $q.defer();

        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }

        return deferred.promise;
    }];

    /**
    * App routes
    */
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        abstract : true,
        views : {
            'layout': {
                templateUrl : 'angularjs/app/home/index.html'
            },
            'header@home' : {
                templateUrl : 'angularjs/app/home/header/header.html',
                controller : 'HeaderCtrl'
            },
            'footer@home' : {
                templateUrl : 'angularjs/app/home/footer/footer.html',
            },
            main: {}
        },
    })
    .state('home.login', {
        url: '/login',
        views : {
            'main@home' : {
                templateUrl : 'angularjs/app/auth/login/login.component.html',
                controller : 'LoginCtrl'
            }
        },
        data : {
            pageTitle : 'Project 1 - Login'
        },
        resolve : {
            skipIfLoggedIn : skipIfLoggedIn
        }
    })
    .state('logout', {
        url : '/logout',
        views : {
            'layout': {
                templateUrl: null,
                controller: 'LogoutCtrl'
            }
        }
    })
    .state('home.signup', {
        url : '/signup',
        views : {
            'main@home': {
                templateUrl : 'angularjs/app/auth/signup/signup.component.html',
                controller : 'SignupCtrl'
            }
        },
        data : {
            pageTitle : 'Project 1 - Signup'
        },
        resolve: {
            skipIfLoggedIn : skipIfLoggedIn
        }
    })
    .state('home.page', {
        url : '/',
        views : {
            'main@home': {
                templateUrl : 'angularjs/app/home/homepage/homepage.component.html',
            }
        },
        data : {
            pageTitle : 'Project 1 - Home Page'
        }
    });
}
