(function() {
  'use strict';

  angular
    .module('ang2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;


    /*
      ~ Put all json files into one
      ~ See how slow it is going to be using 10k each files
      ~ Might not be that bad if searching one by one
      ~ We will see how it is after orange county

    */
  }// End `MainController`
  
})();
