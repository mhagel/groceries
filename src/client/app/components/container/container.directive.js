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
                color: '@',
                list: '='
            },
            controller: ContainerController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: true //allows directives to contain other directives
        }
    }

    ContainerController.$inject = ['dataservice'];
    function ContainerController(dataservice) {
        var vm = this;

        vm.wColor = 'w' + vm.color;

    }

})();
