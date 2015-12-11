(function() {
    'use strict';

    angular
        .module('app.features.dashboard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/features/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    },
                    resolve: {
                        messageCount: messageCount,
                        list: list,
                        add: add
                    }
                }
            }
        ];

        messageCount.$inject = ['dataservice'];
        function messageCount(dataservice) {
            return dataservice.getMessageCount();
        }

        list.$inject = ['dataservice'];
        function list(dataservice) {
            return dataservice.getList();
        }


        function add() {
            return {
                title: 'Add an Item',
                description: 'Type in a grocery item here'
            };
        }
    }
})();
