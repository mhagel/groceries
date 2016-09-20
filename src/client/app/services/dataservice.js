(function() {
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
            addItem: addItem,
            deleteItem: deleteItem,
            list: []
        };

        return service;

        function getMessageCount() {
            return $q.when(36);
        }

        function getList() {
            return $http.get('/api/list')
                .then(success)
                .catch(fail);

            function success(response) {
                service.list = response.data;
                console.log('service.list', service.list);
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getList')(e);
            }
        }

        function addItem(item) {
            console.log('dataservice', item);
            return $http.post('/api/list', item)
                .then(success)
                .catch(fail);


            function success(response) {
                console.log("item added: " + response.data);
                return response.data;
            }

            function fail(e) {
                return exception.catcher('Add failed for ' + item)(e);
            }
        }

        function deleteItem(item) {
            var id = item._id;

            return $http.delete('/api/list/:id', id)
                .then(success)
                .catch(fail);

            function success(response){
                console.log(response);
            }

            function fail(e) {
                return exception.catcher('Delete failed for ' + item)(e);
            }
        }
    }
})();
