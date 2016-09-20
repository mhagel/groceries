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
            bindToController: true,
            scope: {
                list: '='
            },
            require: '^DashboardController'
        };
    }

    ListController.$inject = ['dataservice', '$scope'];

    function ListController(dataservice, $scope) {
        var vm = this;

        vm.deleteItem = deleteItem
        //todo: vm.list

        function deleteItem(item) {
            dataservice.deleteItem(item)
                .then(success)
                .catch(fail);

            function success(response) {
                dataservice.getList();
                console.log('Deleted' + item + '. response: ' + response);
            }

            function fail(e) {
                return e.message;
            }
        }
    }
})();
