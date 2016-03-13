'use strict';

angular.module('tour_guides').controller('AcceptedRequestController', function ($scope, $state) {
  $scope.helpers({
    requests: function () {
      return Bookings.find({
        'participants.tour_guide': Meteor.userId(),
        accepted: true
      });
    }
  });

  $scope.goToListDetail = function (requestId) {
    $state.go('ListDetail', {
      requestId: requestId
    });
  };


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