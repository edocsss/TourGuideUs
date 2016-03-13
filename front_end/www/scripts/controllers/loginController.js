'use strict';

angular.module('tour_guides').controller('LoginController', function ($scope, $state) {
    $scope.user = {};
    $scope.loginUser = function () {
        Meteor.loginWithPassword($scope.user.email, $scope.user.password, function (error) {
            if (!error) {
                console.log('USER LOGGED IN!');
                if (Meteor.user().profile.type === 'tourist') {
                    $state.go('locationList');
                } else {
                    $state.go('requestList.acceptedList');
                }
            } else {
                console.log('ERROR LOGGING IN');
                console.log(error);
            }
        });
    };
});