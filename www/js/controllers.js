angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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

.controller('HomeCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('AguaCtrl', function($scope) {
  
  $scope.title = "El agua";
  
  $scope.show = 1;
  
  $scope.siguiente = function(){
    $scope.show = $scope.show + 1;
  };

  $scope.anterior = function(){
    $scope.show = $scope.show - 1;
  };

})

.controller('ArbolesCtrl', function($scope) {
  
  $scope.title = "Los arboles";
  
  $scope.show = 1;
  
  $scope.siguiente = function(){
    $scope.show = $scope.show + 1;
  };

  $scope.anterior = function(){
    $scope.show = $scope.show - 1;
  };

})

.controller('CalentamientoCtrl', function($scope) {
  
  $scope.title = "Calentamiento Global";
  
  $scope.show = 1;
  
  $scope.siguiente = function(){
    $scope.show = $scope.show + 1;
  };

  $scope.anterior = function(){
    $scope.show = $scope.show - 1;
  };

})

.controller('ContaminacionCtrl', function($scope) {
  
  $scope.title = "Contamiacion";
  
  $scope.show = 1;
  
  $scope.siguiente = function(){
    $scope.show = $scope.show + 1;
  };

  $scope.anterior = function(){
    $scope.show = $scope.show - 1;
  };

})

.controller('PreguntasCtrl', function($scope) {

  $scope.modoPreguntas = true;

  $scope.modoRespuestas = false;
  
  $scope.title = "Preguntas";
  
  $scope.show = 1;

  $scope.choices = [];

  $scope.pregunta1 = "Que pasaria si la tierra se calentara mucho?";

  $scope.respuestas1 = [{ value: false, respuesta: "Estariamos siempre en verano"}, { value: false, respuesta: "Incorrecta 2"}, { value: false, respuesta: "Incorrecta 3"}, { value: true, respuesta: "Se extinguirian las especies"}];

  $scope.pregunta2 = "Como podemos ayudar a reducir la contaminacion del agua?";

  $scope.respuestas2 = [{ value: false, respuesta: "Incorrecta 1"}, { value: false, respuesta: "Incorrecta 2"}, { value: true, respuesta: "Usando productos ecologicos"}];
  
  $scope.pregunta3 = "Porque se produce el calentamiento global?";

  $scope.respuestas3 = [{ value: false, respuesta: "El clima esta cambiando"}, { value: false, respuesta: "Incorrecta 2"}, { value: false, respuesta: "Incorrecta 3"}, { value: true, respuesta: "Fluorocarbonados"}];
  
  $scope.pregunta4 = "Por que se contamina el mar?";

  $scope.respuestas4 = [{ value: false, respuesta: "Porque hay muchas plantas"}, { value: false, respuesta: "Porque lo ensucian los animales"}, { value: true, respuesta: "Productos humanos"}];

  $scope.pregunta5 = "Por que se extinguen las especies?";

  $scope.respuestas5 = [{ value: false, respuesta: "Por el ciclo de la vida"}, { value: false, respuesta: "Por el exceso de agua"}, { value: false, respuesta: "Incorrecta 3"}, { value: true, respuesta: "Malos habitos de la humanidad"}];

  $scope.pregunta6 = "Que esta pasando con los arboles?";

  $scope.respuestas6 = [{ value: false, respuesta: "No puede reciclarse"}, { value: false, respuesta: "No viven lo suficiente"}, { value: false, respuesta: "Incorrecta 3"}, { value: true, respuesta: "Talas indiscriminadas"}];

  $scope.sendRespuesta = function(eleccion, index){
    $scope.choices[index] = eleccion;
    console.log($scope.choices);
  }

  $scope.siguiente = function(){
    if($scope.show<6){
      $scope.show = $scope.show + 1;
    } else {
      $scope.modoPreguntas = false;
      $scope.modoRespuestas = true;
      $scope.title = "Respuestas";
      $scope.show = 1;
      console.log($scope.choices);
    }
  }

  $scope.anterior = function(){
    $scope.show = $scope.show - 1;
  }

});