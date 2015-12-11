(function() {
    'use strict';

    angular.module('app.components.list')
        .directive('list', listDirective);

    function listDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/list/list.html',
            scope: {
                list: "="
            },
            controller: ListController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    ListController.$inject = ['dataservice'];
    function ListController(dataservice) {
        var vm = this;
    }
})();
