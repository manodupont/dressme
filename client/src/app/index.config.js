(function() {
  'use strict';

  angular
    .module('client')
    .config(function config($logProvider, toastrConfig) {
      // Enable log
      $logProvider.debugEnabled(true);

      // Set options third-party lib
      toastrConfig.allowHtml = true;
      toastrConfig.timeOut = 3000;
      toastrConfig.positionClass = 'toast-top-right';
      toastrConfig.preventDuplicates = true;
      toastrConfig.progressBar = true;


    })
    .config(
      ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
          china: true
        });
      }]
    );
})();
