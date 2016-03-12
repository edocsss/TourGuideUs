'use strict';

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('tour_guides', [
	'ionic',
	'angular-meteor',
  'ion-datetime-picker'
])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
         .state('home', {
             url: '',
             templateUrl: 'templates/home.html',
             controller: 'HomeController'
         })
        //.state('home', {
        //    url: '',
        //    templateUrl: 'templates/location-list.html',
        //    controller: 'LocationListController'
        //})
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        })
        .state('locationList', {
            url: '/locations',
            templateUrl: 'templates/location-list.html',
            controller: 'LocationListController'
        })
        .state('tourGuideList', {
            url: '/tourguides/:locationId',
            templateUrl: 'templates/tour-guide-list.html',
            controller: 'TourGuideListController'
        })
        .state('tourGuideDetails', {
            url: '/tourguide/:tourguideId',
            templateUrl: 'templates/tour-guide-details.html',
            controller: 'TourGuideDetailsController'
        })
        .state('bookingRequest', {
          url: '/booking/:tourguideId',
          templateUrl: 'templates/booking-request.html',
          controller: 'BookingRequestController'
        })
        .state('acceptedList', {
          url: '/acceptedList',
          templateUrl: 'templates/accepted-list.html',
          controller: 'AcceptedRequestController'
        })
        .state('pendingList', {
          url: '/pendingList',
          templateUrl: 'templates/pending-list.html',
          controller: 'PendingRequestController'
        });

  $urlRouterProvider.otherwise('');
})
.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
