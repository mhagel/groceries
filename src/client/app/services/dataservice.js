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
            getMessageCount: getMessageCount,
            addItem: addItem
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

        function addItem(item) {
          return $http.post('/api/list')
            .then(success)
            .catch(fail);

          function success(response) {
            console.log("item added: " + response.data);
            return response.data;
          }

          function fail(e) {
            return exception.catcher('Add failed for addItem')(e);
          }
        }
    }
})();
