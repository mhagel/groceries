(function() {
    'use strict';

    angular.module('app.components.news')
        .directive('news', newsDirective);

    function newsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/news/news.html',
            scope: {},
            controller: newsController,
            controllerAs: 'vm',
            bindToController: true
        }
    }

    function newsController() {
        var vm = this;

        vm.news = {
            title: 'groceries',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };

    }

})();
