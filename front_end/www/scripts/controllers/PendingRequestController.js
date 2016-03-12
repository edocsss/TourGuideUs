'use strict';

angular.module('tour_guides').controller('PendingRequestController', function ($scope, $state) {
  var itemsData = [];

  $scope.helpers({
    requests: function () {
      return Bookings.find({
        accepted: false
      });
    }
  });

  $scope.remove = function(item) {
    for(var i = 0; i < itemsData.length; i++) {
      if(itemsData[i] == item ){
        itemsData.splice(i, 1);
      }
    }
  };

  //if like button is clicked
  $scope.accepted = function(item){
    for(var i = 0; i < itemsData.length; i++) {
      if(itemsData[i] == item){
        itemsData[i].accepted = true;
      }
    }

  };

  //if filter accepted button is clicked
  $scope.filterAccepted = function(){
    $state.go('AcceptedList');
    console.log("ClickAccepted");
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
