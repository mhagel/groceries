(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['messageCount', 'list', 'add'];
    /* @ngInject */
    function DashboardController(messageCount, list, add) {
        var vm = this;

        vm.messageCount = messageCount;
        vm.list = list;
        vm.add = add;

        vm.title = 'Dashboard';
    }
})();
