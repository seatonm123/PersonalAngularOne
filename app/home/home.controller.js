(function(){
  'use strict';

  angular
    .module('MattSeaton')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$http', '$stateParams', '$state'];

    function HomeController($http, $stateParams, $state){
      const vm = this;

      vm.$onInit = function(){
        vm.title = 'Hello from the Home Controller';
      };

      vm.goAbout = function(){
        $state.go('about');
      };

      vm.goProjects = function(){
        $state.go('projects');
      };

      vm.goTravels = function(){
        $state.go('travels');
      };

      vm.goContact = function(){
        $state.go('contact');
      };

      vm.goProjects = function(){
        $state.go('projects');
      };
    }

})();
