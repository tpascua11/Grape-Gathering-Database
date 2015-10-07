'use strict';

/**
 * MainCtrl
 */

angular.module('dataGrapesApp')
  .controller('MainCtrl', function ($scope) {

    $scope.message = "hello, you!";

    $scope.changeMessage = function() {
      $scope.message = "new, message!";
    }

    $scope.Employee = [
          {id: 1, name: "Bob"},
          {id: 2, name: "Fred"},
          {id: 3, name: "Elephant"},
          {id: 4, name: "Dog"},
          {id: 5, name: "Cat"},
          {id: 6, name: "Vampire"},
        ]

});
