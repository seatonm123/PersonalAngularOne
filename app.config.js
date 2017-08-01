(function(){
  'use strict';

  angular
    .module('MattSeaton').config(config);

    function config($stateProvider, $urlRouterProvider, $locationProvider){

      $locationProvider.html5Mode(true);
      $stateProvider
        .state({
          name: 'home',
          url: '/',
          component: 'home'
        })
        .state({
          name: 'travels',
          url: '/travels',
          component: 'travels'
        });
    }

})();
