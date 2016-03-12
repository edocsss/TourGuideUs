'use strict';

angular.module('tour_guides').controller('TourGuideListController', function ($scope, $stateParams) {
    $scope.filter = {
        startDate: '',
        endDate: '',
        price: ''
    };

    $scope.location = Locations.findOne({
        _id: $stateParams.locationId
    });
});