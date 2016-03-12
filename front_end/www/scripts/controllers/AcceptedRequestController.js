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

  $scope.remove = function(item) {
      for(var i = 0; i < itemsData.length; i++) {
        if(itemsData[i] == item ){
          itemsData.splice(i, 1);
        }
      }


    for(var i = 0 ; i < requests.length  ; i++){
      if(requests[i]._id == )}

  };

  //if like button is clicked
  $scope.accepted = function(item){
    for(var i = 0; i < itemsData.length; i++) {
      if(itemsData[i] == item){
        itemsData[i].accepted = true;
      }
    }




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
