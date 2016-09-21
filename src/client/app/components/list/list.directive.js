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
            }
        };
    }

    ListController.$inject = ['dataservice', '$scope'];

    function ListController(dataservice, $scope) {
        var vm = this;
        vm.deleteItem = deleteItem;
        vm.getList = getList;
        vm.list;

        getList();

        function getList() {
            return dataservice.getList()
                .then(success)
                .catch(fail);

            function success(response) {
                vm.list = response;
                console.log('list directive', vm.list);
            }

            function fail(e) {
                return e.message;
            }
        }

        function deleteItem(item) {
            dataservice.deleteItem(item)
                .then(success)
                .catch(fail);

            function success(response) {
                getList();
                console.log('Deleted' + item + '. response: ' + response);
            }

            function fail(e) {
                return e.message;
            }
        }
    }
})();
