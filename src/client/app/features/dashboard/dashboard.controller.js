(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['messageCount', 'people', 'news'];
    /* @ngInject */
    function DashboardController(messageCount, people, news) {
        var vm = this;

        vm.messageCount = messageCount;
        vm.people = people;
        vm.news = news;

        vm.title = 'Dashboard';
    }
})();
