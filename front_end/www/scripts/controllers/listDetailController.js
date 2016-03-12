'use strict';

angular.module('tour_guides').controller('listDetailController', function ($scope, $stateParams) {
  //$scope.test = 'test';
  var touristId = Bookings.findOne({
    _id:  $stateParams.requestId
  }).participants.tourist;


  $scope.touristing = Meteor.users.findOne({
    _id: touristId
  });

  $scope.bookingRequest = Bookings.findOne({
    _id: $stateParams.requestId
  });


  $scope.getDatingDetail = function(){
    //first retrieve the request id
    var ObjectDate = Bookings.findOne({
      _id: $stateParams.requestId
    }).dates;
    console.log("Length: "+Object.keys(ObjectDate).length);

    for(var key in ObjectDate){
      console.log("key: "+key);
      console.log("value: "+ ObjectDate[key]);
    }

  };


});
