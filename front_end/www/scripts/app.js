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
        .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tab.html'
        })
        .state('home', {
             url: '',
             templateUrl: 'templates/home.html',
             controller: 'HomeController',
             authenticate: false
         })
        // .state('home', {
        //    url: '',
        //    templateUrl: 'templates/accepted-list.html',
        //    controller: 'AcceptedRequestController',
        //    authenticate: false
        // })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController',
            // authenticate: false
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'RegisterController',
            // authenticate: false
        })
        .state('locationList', {
            url: '/locations',
            templateUrl: 'templates/location-list.html',
            controller: 'LocationListController',
            // authenticate: 'tourist'
        })
        .state('tourGuideList', {
            url: '/tourguides/:locationId',
            templateUrl: 'templates/tour-guide-list.html',
            controller: 'TourGuideListController',
            // authenticate: 'tourist'
        })
        .state('tourGuideDetails', {
            url: '/tourguide/:tourguideId',
            templateUrl: 'templates/tour-guide-details.html',
            controller: 'TourGuideDetailsController',
            // authenticate: 'tourist'
        })
        .state('bookingRequest', {
          url: '/booking/:tourguideId',
          templateUrl: 'templates/booking-request.html',
          controller: 'BookingRequestController',
          // authenticate: 'tourist'
        })
        .state('requestList', {
          url: '/request',
          abstract: true,
          templateUrl: 'templates/request-tabs.html'
        })
        .state('requestList.acceptedList', {
          url: '/request/acceptedList',
          views: {
            'accepted-request-tab': {
              templateUrl: 'templates/accepted-list.html',
              controller: 'AcceptedRequestController',
              // authenticate: 'tourguide'
            }
          }
        })
        .state('requestList.pendingList', {
          url: '/request/pendingList',
          views: {
            'pending-request-tab': {
              templateUrl: 'templates/pending-list.html',
              controller: 'PendingRequestController',
              // authenticate: 'tourguide'
            }
          }
        })
        .state('ListDetail', {
          url: '/listDetail/:requestId',
          templateUrl: 'templates/ListDetail.html',
          controller: 'listDetailController'
        });

  $urlRouterProvider.otherwise('');
})
.run(function ($ionicPlatform, $rootScope, $state) {
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

    // $rootScope.$on('$stateChangeStart', function (e, toState) {
    //   if (toState.authenticate) {
    //     if (toState.authenticate !== Meteor.user().profile.type) {
    //       if (Meteor.user().profile.type === 'tourist') {
    //         $state.go('locationList');
    //       } else {
    //         $state.go('acceptedList');
    //       }
    //     }
    //   } else {
    //     $state.go('home');
    //   }
    // });
 });
