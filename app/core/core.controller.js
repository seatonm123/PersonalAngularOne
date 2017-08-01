(function(){
  'use strict';

  angular
    .module('MattSeaton')
    .controller('CoreController', CoreController);

    CoreController.$inject = ['$http', '$stateParams', '$state'];

    function CoreController($http, $stateParams, $state){
      const vm = this;

      vm.$onInit = function(){
        vm.showSidebar = false;
      };

      vm.sideHide = function(){
        if (vm.showSidebar == false){
          vm.showSidebar = true;
        } else {
          vm.showSidebar = false;
        }
      };

      vm.goHome = function(){
        $state.go('home');
        vm.showSidebar = false;
      };

      vm.goTravel = function(){
        $state.go('travels');
        vm.showSidebar = false;
      };
    }

})();
