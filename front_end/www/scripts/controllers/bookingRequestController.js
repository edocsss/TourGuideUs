'use strict';

angular.module('tour_guides').controller('BookingRequestController', function ($scope, $state, $stateParams, $ionicPopup) {
    $scope.booking = {
        dates: [{
            date: null,
            time: null
        }]
    };

    $scope.tourGuide = Meteor.users.findOne({
        _id: $stateParams.tourguideId
    });

    $scope.popupNoOfHours = function ($index) {
        var popup = $ionicPopup.show({
            template: '<input type="number" ng-model-options="{ debounce: 500 }" min="0" max="24" ng-model="booking.dates[' + $index + '].time">',
            title: 'Number of Hours',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel',
                    onTap: function () {
                        return null;
                    }
                },

                {
                    text: '<b>Select</b>',
                    type: 'button-positive',
                    onTap: function () {
                        return $scope.booking.dates[$index].time;
                    }
                }
            ]
        });

        popup.then(function (time) {
            $scope.booking.dates[$index].time = time;
        });
    };

    $scope.addNewBookingDate = function () {
        $scope.booking.dates.push({
            date: null,
            time: null
        });
    };

    $scope.removeBookingDate = function (i) {
        $scope.booking.dates.splice(i, 1);
    };

    $scope.getTotalCost = function () {
        var rate = $scope.tourGuide.profile.price;
        var total = 0;

        for (var i in $scope.booking.dates) {
            total += $scope.booking.dates[i].time * rate;
        }

        return total;
    };

    $scope.createBooking = function () {
        var dates = [];
        for (var date in $scope.booking.dates) {
            dates.push({
                date: $scope.booking.dates[date].date,
                time: $scope.booking.dates[date].time
            });
        }

        Bookings.insert({
            participants: {
                tour_guide: $stateParams.tourguideId,
                tourist: Meteor.userId()
            },
            dates: dates,
            totalCost: $scope.getTotalCost(),
            accepted: false
        });

        $state.go('locationList');
    };
});