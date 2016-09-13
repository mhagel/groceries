(function() {
    'use strict';

    angular.module('app.components.list')
        .directive('list', listDirective)
        .controller('listController', ListController);

    function listDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/list/list.html',
            controller: ListController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    ListController.$inject = ['dataservice', '$scope'];
    function ListController(dataservice, $scope) {
        var vm = this;

        vm.init = init;
        vm.getList = getList;
        vm.list = $scope.vm.list;

        init();

        function init() {
            getList();
        }

        function getList() {
            return dataservice.getList()
                .then(success)
                .catch(fail);

            function success(response) {
                $scope.vm.list = response;
            }

            function fail(e) {
                return e.message;
            }
        }
    }
})();
