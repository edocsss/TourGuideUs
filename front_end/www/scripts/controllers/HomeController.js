'use strict';

angular.module('tour_guides').controller('HomeController', function ($scope, $state) {
    $scope.goToRegister = function () {
        $state.go('register');
    };

    $scope.goToLogin = function () {
        $state.go('login');
    };
});