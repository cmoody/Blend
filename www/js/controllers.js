angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TodaysCatchCtrl', function($scope, $interval) {
  $scope.playlists = [
    { artist: 'Dr. Dre', song: 'Song Name', id: 1, albumArt: 'album1.jpg', user: '', userIcon: '' },
    { artist: 'Kid Cudi', song: 'Song Name', id: 2, albumArt: 'album2.jpg', user: '', userIcon: '' },
    { artist: 'Outkast', song: 'Song Name', id: 3, albumArt: 'album3.jpg', user: '', userIcon: '' },
    { artist: 'Kendrick Lamar', song: 'Song Name', id: 4, albumArt: 'album4.jpg', user: '', userIcon: '' },
    { artist: 'Schoolboy Q', song: 'Song Name', id: 5, albumArt: 'album5.jpg', user: '', userIcon: '' },
    { artist: 'Wu-Tang Clan', song: 'Song Name', id: 6, albumArt: 'album6.jpg', user: '', userIcon: '' },
    { artist: 'LCD Soundsystem', song: 'Song Name', id: 7, albumArt: 'album7.jpg', user: '', userIcon: '' }
  ];

  // Create timeout to add new tracks every X seconds
  var newPlaylists = [
    { artist: 'Dr. Dre', song: 'Song Name', id: 8, albumArt: 'album1.jpg', user: '', userIcon: '' },
    { artist: 'Kid Cudi', song: 'Song Name', id: 9, albumArt: 'album2.jpg', user: '', userIcon: '' },
    { artist: 'Outkast', song: 'Song Name', id: 10, albumArt: 'album3.jpg', user: '', userIcon: '' },
    { artist: 'Kendrick Lamar', song: 'Song Name', id: 11, albumArt: 'album4.jpg', user: '', userIcon: '' },
    { artist: 'Schoolboy Q', song: 'Song Name', id: 12, albumArt: 'album5.jpg', user: '', userIcon: '' },
    { artist: 'Wu-Tang Clan', song: 'Song Name', id: 13, albumArt: 'album6.jpg', user: '', userIcon: '' },
    { artist: 'LCD Soundsystem', song: 'Song Name', id: 14, albumArt: 'album7.jpg', user: '', userIcon: '' }
  ];

  var count = 0;

  var stop = $interval(function() {
    $scope.stopInterval();

    $scope.playlists.unshift(newPlaylists[count]);

    count++;
    
  }, 5000);

  $scope.stopInterval = function() {
      if(count >= newPlaylists.length - 1) {
        $interval.cancel(stop);
        stop = undefined;
      }
    };
})

.controller('NowPlayingCtrl', function($scope, $stateParams) {

  
});
