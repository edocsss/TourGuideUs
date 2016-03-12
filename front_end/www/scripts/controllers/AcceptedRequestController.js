'use strict';

angular.module('tour_guides').controller('AcceptedRequestController', function ($scope, $state) {
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
    $state.go('pendingList');
  };

  $scope.getImageUser = function (bookingId) {
    var touristId = Bookings.findOne({
      _id: bookingId
    }).participants.tourist;

    return Meteor.users.findOne({
      _id: touristId
    }).profile.profpicURL;
  };

  $scope.clickUser = function (bookingid){
    console.log("User clicked");
    //go to other state
    $state.go('ListDetail',{});
  };

  $scope.getDayLength = function (bookingId) {

    var year1 = 0;
    var year2 = 0;
    var month1 = 0;
    var month2 = 0;
    var day1 = 0;
    var day2 = 0;


    var ObjectDate = Bookings.findOne({
      _id: bookingId
    }).dates;

    var firstDate = Object.keys(ObjectDate)[0];
    var secondDate = Object.keys(ObjectDate)[1];

    firstDate = firstDate.toString();

    year1 =  parseInt(firstDate.substr(0,4));
    month1 = parseInt(firstDate.substr(5,2));
    day1 = parseInt(firstDate.substr(8,2));


    year2 =  parseInt(secondDate.substr(0,4));
    month2 = parseInt(secondDate.substr(5,2));
    day2 = parseInt(secondDate.substr(8,2));

    var totalDay = (year2-year1)*365+(month2-month1)*30+(day2-day1);
    return totalDay;

  };


  $scope.getTotalPrice = function(bookingId){

    var totalPrice = Bookings.findOne({
      _id: bookingId
    }).totalCost;

    return totalPrice;
  };


  $scope.getBookingTouristName = function (bookingId) {
    var touristId = Bookings.findOne({
      _id: bookingId
    }).participants.tourist;



    return Meteor.users.findOne({
      _id: touristId
    }).profile.name;
  };
});
