(function() {
    'use strict';

    angular.module('app.components.people')
        .directive('people', peopleDirective);

    function peopleDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/people/people.html',
            scope: {},
            controller: 'PeopleController',
            controllerAs: 'vm',
            bindToController: true
        };
    };

    PeopleController.$inject = ['dataservice'];
    function PeopleController(dataservice) {
        var vm = this;

        vm.people = [];

        vm.getPeople();

        function getPeople() {
            dataservice.getPeople()
                .then(function (data) {
                    vm.people = data;
                });
        }

    }
})();
