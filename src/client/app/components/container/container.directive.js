(function() {
    'use strict';

    angular.module('app.components.container')
        .directive('container', containerDirective)
        .controller('containerController', ContainerController);

    function containerDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/container/container.html',
            scope: {
                title: '@',
                color: '@'
            },
            controller: ContainerController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: true //allows directives to contain other directives
        }
    }

    ContainerController.$inject = [];
    function ContainerController() {
        var vm = this;

        vm.wColor = 'w' + vm.color;

    }

})();
