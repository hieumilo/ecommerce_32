<!DOCTYPE html>
<html lang="en" ng-app="App">
<head>
    <meta charset="UTF-8">
    <title ng-bind="$state.current.data.pageTitle"></title>
    <!-- Bootstrap v3.3.7 -->
    {{ Html::style('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css') }}
    <!-- Font Awesome -->
    {{ Html::style('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css') }}
    <!-- Ionicons -->
    {{ Html::style('https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css') }}
    <!-- bootstrap-social -->
    {{ Html::style('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css') }}
    {{ Html::style('angularjs/lib/css/style.css') }}
    {{ Html::style('angularjs/lib/css/style1.css') }}
</head>
<body>

    <div ui-view="layout"></div>

    <!-- jquery v3.2.1 -->
    {{ Html::script('https://code.jquery.com/jquery-3.2.1.min.js') }}
    <!-- Bootstrap v3.3.7 -->
    {{ Html::script('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js') }}
    <!-- jquery-easing v1.4.1 -->
    {{ Html::script('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js') }}
    <!-- angular v1.5.9 -->
    {{ Html::script('angularjs/node_modules/angular/angular.js') }}
    <!-- angular-ui-router v0.3.2 -->
    {{ Html::script('angularjs/node_modules/angular-ui-router/release/angular-ui-router.js') }}
    <!-- satellizer v0.15.5 -->
    {{ Html::script('angularjs/node_modules/satellizer/dist/satellizer.js') }}
    <!-- AngularCSS -->
    {{ Html::script('angularjs/node_modules/angular-css/angular-css.min.js') }}
    <!-- angular file upload -->
    {{ Html::script('angularjs/node_modules/angular-file-upload/dist/angular-file-upload.min.js') }}
    <!-- app script -->
    <!-- config -->
    {{ Html::script('angularjs/config/satellizer.config.js') }}
    {{ Html::script('angularjs/config/routes.config.js') }}
    <!-- service -->
    {{ Html::script('angularjs/services/auth.service.js') }}
    <!-- module -->
    {{ Html::script('angularjs/app.module.js') }}
    {{ Html::script('angularjs/app.constant.js') }}
    {{ Html::script('angularjs/app.run.js') }}
    {{ Html::script('angularjs/app.config.js') }}
    {{ Html::script('angularjs/app.service.js') }}
    <!-- home -->
    {{ Html::script('angularjs/app/home/header/header.js') }}
    <!-- auth -->
    {{ Html::script('angularjs/app/auth/login/login.component.js') }}
    {{ Html::script('angularjs/app/auth/logout/logout.component.js') }}
    {{ Html::script('angularjs/app/auth/signup/singup.component.js') }}
    
</body>
</html>
