(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['dataservice', '$scope'];
    /* @ngInject */
    function DashboardController(dataservice, $scope) {
        var vm = this;

        vm.title = 'Groceries Dashboard';
    }
})();
