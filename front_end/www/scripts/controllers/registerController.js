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
        type: 'tourist',
        availability: {}
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
            location: $scope.newUser.type === 'tourguide' ? $scope.newUser.location.toLowerCase() : null,
            price: $scope.newUser.type === 'tourguide' ? $scope.newUser.price : null,
            availability: $scope.newUser.type === 'tourguide' ? $scope.newUser.availability.end : null
        };

        Meteor.call('createNewUser', $scope.newUser.email, $scope.newUser.password, userProfile ,function (error) {
            if (error) {
                console.log('ERROR');
                console.log(error);
            } else {
                $state.go('locationList');
            }
        });
    };
});