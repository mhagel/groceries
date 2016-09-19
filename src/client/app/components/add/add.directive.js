(function() {
    'use strict';

    angular.module('app.components.add')
        .directive('add', addDirective);

    function addDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/add/add.html',
            scope: {
                item: '=',
            },
            controller: AddController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    AddController.$inject = ['dataservice', 'logger'];

    function AddController(dataservice, logger) {
        var vm = this;
        vm.addItem = addItem;
        vm.getList = getList;
        vm.list = dataservice.list;

        function addItem() {
          dataservice.addItem(vm.item)
            .then(success)
            .catch(fail);

            function success(response) {
              logger.success(vm.item.name + " added to list!", response, "Success");
              vm.item = {};
              //TODO: reload list to list directive.
              vm.getList();
              return response;
            }

            function fail(e) {
              return e.message;
            }

        }

        function getList() {
            dataservice.getList()
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
