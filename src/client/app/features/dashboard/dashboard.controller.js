(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['dataservice', '$scope'];
    /* @ngInject */
    function DashboardController(dataservice, $scope) {
        var vm = this;
        vm.init = init;
        vm.list = [];
        console.log('dashboard',vm.list);

        init();

        function init() {
            getList();
        }

        function getList() {
            return dataservice.getList()
                .then(success)
                .catch(fail);

            function success(response) {
                vm.list = response;
            }

            function fail(e) {
                return e.message;
            }
        }
    }
})();
