(function () {
  'use strict';

  angular.module('client')
    .config(function routeConfig($routeProvider) {
      $routeProvider
        .when('/wardrobe', {
          templateUrl: 'app/wardrobe/wardrobe.html',
          controller: 'WardrobeController',
          controllerAs: 'ctrl'
        })
    })
    .controller('WardrobeController', function WardrobeController($log, Wardrobe) {
      var vm = this;

      // Init
      vm.wardrobe = {};

      vm.hitMe = function () {
        $log.log('Getting wardrobe');

        vm.wardrobe = Wardrobe.get({id: 1});
      };
    });
})();
