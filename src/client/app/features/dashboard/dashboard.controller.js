(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    /* @ngInject */
    function DashboardController() {
        var vm = this;

        vm.title = 'Groceries Dashboard';
    }
})();
