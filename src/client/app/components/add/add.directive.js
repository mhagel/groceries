(function() {
    'use strict';

    angular.module('app.components.add')
        .directive('add', addDirective);

    function addDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/add/add.html',
            scope: {
                item: '@',
                section: '@'
            },
            controller: AddController,
            controllerAs: 'vm',
            bindToController: true
        }
    }

    function AddController() {
        var vm = this;
        vm.item = {};

    }

})();
