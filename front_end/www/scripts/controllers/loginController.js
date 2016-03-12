'use strict';

angular.module('tour_guides').controller('LoginController', function ($scope, $state) {
    $scope.user = {};
    $scope.loginUser = function () {
        Meteor.loginWithPassword($scope.user.email, $scope.user.password, function (error) {
            if (!error) {
                console.log('USER LOGGED IN!');
                $state.go('home');
            } else {
                console.log('ERROR LOGGING IN');
                console.log(error);
            }
        });
    };
});