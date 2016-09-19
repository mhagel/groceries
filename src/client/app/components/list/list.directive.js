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

    ListController.$inject = ['dataservice'];

    function ListController(dataservice) {
        var vm = this;

        vm.init = init;
        vm.getList = getList;
        vm.deleteItem = deleteItem;

        vm.list = dataservice.list;

        init();

        console.log('listDir dslist', dataservice.list);

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

        function deleteItem(item) {
            dataservice.deleteItem(item)
                .then(success)
                .catch(fail);

            function success(response) {
                vm.list = getList();
                console.log('Deleted' + item + '. response: ' + response);
            }

            function fail(e) {
                return e.message;
            }
        }
    }
})();
