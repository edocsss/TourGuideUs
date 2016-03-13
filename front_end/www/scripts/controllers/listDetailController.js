'use strict';

angular.module('tour_guides').controller('listDetailController', function ($scope, $stateParams, $state) {
  var touristId = Bookings.findOne({
    _id:  $stateParams.requestId
  }).participants.tourist;

  $scope.touristing = Meteor.users.findOne({
    _id: touristId
  });

  $scope.bookingRequest = Bookings.findOne({
    _id: $stateParams.requestId
  });

  $scope.dataDates = Bookings.findOne({
    _id: $stateParams.requestId
  }).dates;

  $scope.getTime = function (data){
      console.log(data);
  };

  function comparator(a,b){
    var year1 =  parseInt(a.date.substr(0,4));
    var month1 = parseInt(a.date.substr(5,2));
    var day1 = parseInt(a.date.substr(8,2));

    var year2 =  parseInt(b.date.substr(0,4));
    var month2 = parseInt(b.date.substr(5,2));
    var day2 = parseInt(b.date.substr(8,2));

    if(year1 == year2 ){
      if(month1 == month2){
        if(day1 == day2){
          return 0;
        }else if(day1 > day2 ){
          return 1;
        }else{
          return -1;
        }
      }else if(month1 > month2){
        return 1;
      }else{
        return -1;
      }
    }else if(year1 > year2){
      return 1;
    }else{
      return -1;
    }
  }

  $scope.acceptBooking = function () {
    Bookings.update({
      _id: $scope.bookingRequest._id
    }, {
      $set: {
        accepted: true
      }
    });

    $scope.bookingRequest = Bookings.findOne({
      _id: $stateParams.requestId
    });
    $state.go('requestList.pendingList');
  };

  $scope.deleteBooking = function () {
    Bookings.remove({
      _id: $scope.bookingRequest._id
    });

    $scope.bookingRequest = Bookings.findOne({
      _id: $stateParams.requestId
    });

    $state.go('requestList.acceptedList');
  };
});
