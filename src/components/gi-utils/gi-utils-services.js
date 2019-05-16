angular.module('gi-utils.giUtilsServices', [])
    .factory('controllersComService',function($rootScope) {
        var serviceObj = {};
        serviceObj.prepForBroadcast = function(obj){
            this.obj = obj;
            this.broadcastItem();
        };
        serviceObj.broadcastItem = function() {
            $rootScope.$broadcast('handleAppsBroadcast');
            $rootScope.$broadcast('handleAppsBroadcast2');
        };
        return serviceObj;
    })
    .factory('dataService', function($http) {
        return {
            getData: function(url) {
                //return the promise directly.
                return $http.get(url);
            },
            postData: function(url,data){
                return $http.post(url,data);
            }
        }
    });




