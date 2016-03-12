'use strict';

angular.module('tour_guides').controller('LocationListController', function ($scope) {
    $scope.location = {
        searchText: '',
        list: []
    };

    $scope.clearSearchBox = function () {
        $scope.search.location = '';
    };

    $scope.helpers({
        locationList: function () {
            return Locations.find();
        }
    });
});