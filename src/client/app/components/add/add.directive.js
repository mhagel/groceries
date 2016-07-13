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

    AddController.$inject = ['dataservice'];

    function AddController(dataservice) {
        var vm = this;
        vm.addItem = addItem;

        function addItem() {
          dataservice.addItem(vm.item);
          vm.item = {};
          //TODO: refresh list
          //dataservice.getList();
        }


    }

})();
