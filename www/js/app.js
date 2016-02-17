// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.agua', {
    url: '/agua',
    views: {
      'menuContent': {
        templateUrl: 'templates/agua.html',
        controller: 'AguaCtrl'
      }
    }
  })

  .state('app.arboles', {
    url: '/arboles',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles.html',
        controller: 'ArbolesCtrl'
      }
    }
  })

  .state('app.calentamiento', {
    url: '/calentamiento',
    views: {
      'menuContent': {
        templateUrl: 'templates/calentamiento.html',
        controller: 'CalentamientoCtrl'
      }
    }
  })

  .state('app.contaminacion', {
    url: '/contaminacion',
    views: {
      'menuContent': {
        templateUrl: 'templates/contaminacion.html',
        controller: 'ContaminacionCtrl'
      }
    }
  })

  .state('app.preguntas', {
    url: '/preguntas',
    views: {
      'menuContent': {
        templateUrl: 'templates/preguntas.html',
        controller: 'PreguntasCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
