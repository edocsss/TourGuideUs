'use strict';

angular.module('tour_guides').controller('PendingRequestController', function ($scope, $state, $stateParams) {
  $scope.helpers({
    requests: function () {
      return Bookings.find({
        'participants.tour_guide': Meteor.userId(),
        accepted: false
      });
    }
  });

  $scope.goToListDetail = function (requestId) {
    $state.go('ListDetail', {
      requestId: requestId
    });
  };

  //if like button is clicked
  $scope.accepted = function (requestId) {
    Bookings.update({
      _id: requestId
    }, {
      $set: {
        accepted: true
      }
    });
  };

  //if filter accepted button is clicked
  $scope.filterAccepted = function(){
    $state.go('acceptedList');
  };


  $scope.getImageUser = function (bookingId) {
    var touristId = Bookings.findOne({
      _id: bookingId
    }).participants.tourist;

    return Meteor.users.findOne({
      _id: touristId
    }).profile.profpicURL;
  };


  $scope.getDayLength = function (bookingId) {
    return Bookings.findOne({
      _id: bookingId
    }).dates.length;
  };

  $scope.getTotalPrice = function(bookingId){
    var totalPrice = Bookings.findOne({
      _id: bookingId
    }).totalCost;

    return totalPrice;
  };

  $scope.getTouristName = function (bookingId) {
    var touristId = Bookings.findOne({
      _id: bookingId
    }).participants.tourist;

    return Meteor.users.findOne({
      _id: touristId
    }).profile.name;
  };
});
