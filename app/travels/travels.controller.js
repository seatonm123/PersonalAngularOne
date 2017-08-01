(function(){
  'use strict';

  angular
    .module('MattSeaton')
    .controller('TravelsController', TravelsController);

    TravelsController.$inject = ['$http', '$stateParams', '$state'];

    function TravelsController(){
      const vm = this;

      vm.$onInit = function(){
        
      };
    }

})();
