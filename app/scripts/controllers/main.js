'use strict';

/**
 * @ngdoc function
 * @name videoPlayerAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoPlayerAssignmentApp
 */
angular.module('videoPlayerAssignmentApp')
  .controller('MainCtrl', function ($scope, Lightbox, $window) {

    $scope.videoLeftTop = {
      left : 0,
      top : 0,
      right :0,
      bottom : 0
    };

    $scope.minimized = false;
    $scope.closed = true;
    $scope.selectedMatch = null;
    $scope.selectedFilterText = 'All Sports';
    $scope.selectedFilter = 'all';

    $scope.allMatches = [{"name":"Royal Challengers Bangalore vs Mumbai Indians","time":"2016-05-02T16:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"Europa League","sport":"football","isLive":false},{"name":"Royal Challengers Bangalore vs Sunrisers Hyderabad","time":"2016-05-03T08:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"EPL","sport":"football","isLive":true},{"name":"Royal Challengers Bangalore vs Gujarat Lions","time":"2016-05-04T08:30:00.000Z","video":"http://techslides.com/demos/sample-videos/small.webm","tournament":"EPL","sport":"football","isLive":false},{"name":"Royal Challengers Bangalore vs Kings XI Punjab","time":"2016-05-05T04:30:00.000Z","video":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4","tournament":"Ranji","sport":"cricket","isLive":true},{"name":"Royal Challengers Bangalore vs Delhi Daredevils","time":"2016-05-06T16:30:00.000Z","video":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4","tournament":"Ranji","sport":"cricket","isLive":true},{"name":"Royal Challengers Bangalore vs Kolkata Knight Riders","time":"2016-05-07T04:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"IPL 2016","sport":"cricket","isLive":true},{"name":"Royal Challengers Bangalore vs Rising Pune Supergiants","time":"2016-05-08T08:30:00.000Z","video":"http://techslides.com/demos/sample-videos/small.webm","tournament":"Ranji","sport":"cricket","isLive":false},{"name":"Mumbai Indians vs Sunrisers Hyderabad","time":"2016-05-09T08:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"Europa League","sport":"football","isLive":true},{"name":"Mumbai Indians vs Gujarat Lions","time":"2016-05-10T12:30:00.000Z","video":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4","tournament":"Europa League","sport":"football","isLive":true},{"name":"Mumbai Indians vs Kings XI Punjab","time":"2016-05-11T12:30:00.000Z","video":"http://techslides.com/demos/sample-videos/small.webm","tournament":"IPL 2016","sport":"cricket","isLive":true},{"name":"Mumbai Indians vs Delhi Daredevils","time":"2016-05-12T16:30:00.000Z","video":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4","tournament":"Ranji","sport":"cricket","isLive":false},{"name":"Mumbai Indians vs Kolkata Knight Riders","time":"2016-05-13T16:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"Ranji","sport":"cricket","isLive":true},{"name":"Mumbai Indians vs Rising Pune Supergiants","time":"2016-05-14T08:30:00.000Z","video":"http://techslides.com/demos/sample-videos/small.webm","tournament":"Europa League","sport":"football","isLive":true},{"name":"Sunrisers Hyderabad vs Gujarat Lions","time":"2016-05-15T16:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"IPL 2016","sport":"cricket","isLive":true},{"name":"Sunrisers Hyderabad vs Kings XI Punjab","time":"2016-05-16T08:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"Ranji","sport":"cricket","isLive":false},{"name":"Sunrisers Hyderabad vs Delhi Daredevils","time":"2016-05-17T16:30:00.000Z","video":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4","tournament":"Europa League","sport":"football","isLive":false},{"name":"Sunrisers Hyderabad vs Kolkata Knight Riders","time":"2016-05-18T04:30:00.000Z","video":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4","tournament":"IPL 2016","sport":"cricket","isLive":true},{"name":"Sunrisers Hyderabad vs Rising Pune Supergiants","time":"2016-05-19T12:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"EPL","sport":"football","isLive":false},{"name":"Gujarat Lions vs Kings XI Punjab","time":"2016-05-20T04:30:00.000Z","video":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4","tournament":"EPL","sport":"football","isLive":false},{"name":"Gujarat Lions vs Delhi Daredevils","time":"2016-05-21T12:30:00.000Z","video":"http://techslides.com/demos/sample-videos/small.webm","tournament":"IPL 2016","sport":"cricket","isLive":true},{"name":"Gujarat Lions vs Kolkata Knight Riders","time":"2016-05-22T12:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"Ranji","sport":"cricket","isLive":true},{"name":"Gujarat Lions vs Rising Pune Supergiants","time":"2016-05-23T08:30:00.000Z","video":"http://techslides.com/demos/sample-videos/small.webm","tournament":"Ranji","sport":"cricket","isLive":false},{"name":"Kings XI Punjab vs Delhi Daredevils","time":"2016-05-24T08:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"EPL","sport":"football","isLive":false},{"name":"Kings XI Punjab vs Kolkata Knight Riders","time":"2016-05-25T04:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"EPL","sport":"football","isLive":true},{"name":"Kings XI Punjab vs Rising Pune Supergiants","time":"2016-05-26T04:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"IPL 2016","sport":"cricket","isLive":true},{"name":"Delhi Daredevils vs Kolkata Knight Riders","time":"2016-05-27T16:30:00.000Z","video":"http://cdn2.streamable.com/video/tore.webm","tournament":"Europa League","sport":"football","isLive":true},{"name":"Delhi Daredevils vs Rising Pune Supergiants","time":"2016-05-28T16:30:00.000Z","video":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4","tournament":"EPL","sport":"football","isLive":false},{"name":"Kolkata Knight Riders vs Rising Pune Supergiants","time":"2016-05-29T12:30:00.000Z","video":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4","tournament":"EPL","sport":"football","isLive":false}];

    $scope.matches = $scope.allMatches;

    $scope.openVideo = function (match) {
      $scope.closed = false;

      //TODO: decide if we want to open always maximized video
      //$scope.maximizeVideo();
      $scope.selectedMatch = match;
    };

    $scope.minimizeVideo = function(){
      $scope.minimized = true;
      $scope.videoLeftTop = {
        left : ($window.innerWidth - 300 - 20) + "px",
        top : ($window.innerHeight - 220 - 20) + "px",
      };

    }

    $scope.maximizeVideo = function(){
      $scope.minimized = false;
      $scope.videoLeftTop = {
        left : 0,
        top : 0,
      };
    }

    $scope.closeVideo = function(){
      $scope.closed = true;
      $scope.maximizeVideo();
    }

    $scope.filterSport = function(value){
      if(value==='all'){
        $scope.selectedFilterText = "All Sports";
        $scope.selectedFilter = "all";
        $scope.matches = $scope.allMatches;
        return;
      }
      $scope.selectedFilterText = value;
      $scope.matches = $scope.allMatches.filter(function(match){
        return match.sport == value;
      })
    }

    $scope.timeRepresentation= function(time){
      time = new Date(time);
      var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var hours = time.getHours();
      var minutes = time.getMinutes();
      minutes = minutes<10?"0"+minutes:minutes;
      var amPm = hours>=12?'PM':'AM';
      hours = hours % 13;
      return days[time.getDay()] + " " + time.getDate() + ", " + hours + ":" + minutes + " " + amPm;
    }

    $scope.isLive = function(time){
      var currentDate = new Date();
      time = new Date(time);
      var date = time.getDate();
      var month = time.getMonth();
      return currentDate.getDate()==date && currentDate.getMonth()==month;
    }

  }).directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if(!scope.minimized){
              scope.minimizeVideo();
              scope.$apply();
            }
        });
    };
});;


