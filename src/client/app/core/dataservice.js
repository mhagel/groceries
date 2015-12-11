(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getList: getList,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(36); }

        function getList() {
            return $http.get('/api/list')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getList')(e);
            }
        }
    }
})();
