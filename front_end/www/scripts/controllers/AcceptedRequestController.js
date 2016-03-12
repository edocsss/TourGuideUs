'use strict';

angular.module('tour_guides').controller('AcceptedRequestController', function ($scope, $state) {
  var itemsData = [];

  $scope.helpers({
    requests: function () {
      return Bookings.find({
        accepted: true
      });
    }
  });

  $scope.remove = function(requestId) {
    Bookings.remove({
      _id: requestId
    });
  };

  //if filter pending button is clicked
  $scope.filterPending = function(){
    $state.go('PendingList');
    console.log("Clickrejected");
  };

  $scope.getBookingTouristName = function (bookingId) {
    var touristId = Bookings.findOne({
      _id: bookingId
    }).participants.tourist;

   $scope.getBookingDateFirst = function (bookingId){
     var touristId = Bookings.findOne({
       _id: bookingId
     }).dates.date1;
   };
    $scope.getBookingDateSecond = function (bookingId){
      var touristId = Bookings.findOne({
        _id: bookingId
      }).dates.date2;
    };


    return Meteor.users.findOne({
      _id: touristId
    }).profile.name;
  };
});
