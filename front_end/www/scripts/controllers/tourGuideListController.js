'use strict';

angular.module('tour_guides').controller('TourGuideListController', function ($scope, $stateParams) {
    $scope.filter = {
        startDate: null,
        endDate: null,
        price: 100
    };

    $scope.location = Locations.findOne({
        _id: $stateParams.locationId
    });

    $scope.filterTourGuide = function (tourGuide) {
        var availabilityStart = tourGuide.profile.availability.start;
        var availabilityEnd = tourGuide.profile.availability.end;
        var price = tourGuide.profile.price;
        var result = true;

        if (!$scope.filter.startDate || !$scope.filter.endDate) {
            if (parseInt(price) <= parseInt($scope.filter.price)) {
                result = true;
            } else {
                result = false;
            }
        } else {
            if (availabilityStart <= $scope.filter.startDate
                && availabilityEnd >= $scope.filter.endDate
                && parseInt(price) <= parseInt($scope.filter.price)) {
                result = true;
            } else {
                result = false;
            }
        }

        return result;
    };

    $scope.helpers({
        tourGuideList: function () {
            var tourGuideIds = Locations.findOne({
                _id: $stateParams.locationId
            }).tourguides;

            return Meteor.users.find({
                _id: {
                    $in: tourGuideIds
                }
            });
        }
    });
});