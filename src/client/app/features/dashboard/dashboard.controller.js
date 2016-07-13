(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['list'];
    /* @ngInject */
    function DashboardController(list) {
        var vm = this;

        vm.list = list;
        vm.title = 'Groceries Dashboard';
    }
})();
