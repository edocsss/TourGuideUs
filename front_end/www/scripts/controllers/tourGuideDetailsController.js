'use strict';

angular.module('tour_guides').controller('TourGuideDetailsController', function ($scope, $stateParams) {
    $scope.test = 'test';
    $scope.tourGuide = Meteor.users.findOne({
        _id: $stateParams.tourguideId
    });
});