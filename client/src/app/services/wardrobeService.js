/**
 * Created by madupont on 15/12/2015.
 */
(function() {
  'use strict';

  angular
    .module('client')
    .factory('Wardrobe', ['$resource', function($resource) {
      return $resource('/rest/wardrobe/find/:id', {id: '@id'});
    }]);
})();
