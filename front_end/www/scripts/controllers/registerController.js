'use strict';

angular.module('tour_guides').controller('RegisterController', function ($scope, $state) {
    var profpicURLs = [
        'images/profile_pictures/1.jpg',
        'images/profile_pictures/2.jpg',
        'images/profile_pictures/3.jpg',
        'images/profile_pictures/4.jpg',
        'images/profile_pictures/5.jpg'
    ];

    function getRandomProfpicURL () {
        var randomIndex = Math.floor(Math.random() * profpicURLs.length);
        return profpicURLs[randomIndex];
    }

    $scope.newUser = {
        type: 'tourist'
    };

    $scope.registerUser = function () {
        var userProfile = {
            name: $scope.newUser.fullName,
            email: $scope.newUser.email,
            contact: $scope.newUser.phone,
            type: $scope.newUser.type,
            profpicURL: getRandomProfpicURL(),
            tagline: $scope.newUser.type === 'tourguide' ? $scope.newUser.tagline : null,
            description: $scope.newUser.description === 'tourguide' ? $scope.newUser.description : null,
            location: $scope.newUser.type === 'tourguide' ? $scope.newUser.location : null,
            price: $scope.newUser.type === 'tourguide' ? $scope.newUser.price : null
        };

        Accounts.createUser({
            email: $scope.newUser.email,
            password: $scope.newUser.password,
            profile: userProfile
        }, function (error) {
            // When there is no error, the user is logged in by default
            console.log(error);
            if (!error) {
                $state.go('locationList');
            } else {
                // SPAWN ALERT HERE or DISPLAY ERROR MESSAGE ON UI
            }
        });
    };
});