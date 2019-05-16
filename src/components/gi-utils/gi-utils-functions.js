'use strict';

var GIArrUtil = {
    countSelectedItems: function(arr) {
        var count = 0;
        angular.forEach(arr, function(ele) {
            if (ele.isSelected === true) {
                count += 1;
            }
        });
        return count;
    },

    filterKeysFromObject: function(obj, arr) {
        var filteredObject = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (arr.indexOf(key) < 0) {
                    filteredObject[key] = obj[key];
                }
            }
        }

        return filteredObject;
    },

    wrapObjectIntoArray: function(obj) {
        if (!$.isArray(obj)) {
            if (typeof obj == "undefined")
              return [];
            else
            return [obj];
        }

        return obj;
    },

    isNullEmptyUndefined: function(item) {
        if (angular.isUndefined(item) || item === '' || item == null || item === "null") {
            return true;
        }

        return false;
    },

    searchKeyInArray: function(arr, searchKey, searchValue) {
        var foundObj = null;
        angular.forEach(arr, function(ele, eleKey) {
            
            //console.log(ele);
            //console.log(ele.User);
            //console.log("eleKey :: "+eleKey);
            //console.log("searchKey :: "+searchKey);
            //console.log("searchValue ::" + searchValue);
            if (angular.isDefined(ele.user[searchKey]) && ele.user[searchKey] != null && ele.user[searchKey] == searchValue) {
                foundObj = {
                    index:eleKey,
                    value:ele
                }
            }
        });
        return foundObj;
    },
    setObjKeyInArray: function(arr, key, value) {
        var foundObj = null;
        angular.forEach(arr, function(ele, eleKey) {
            if (angular.isDefined(ele[key])) {
                ele[key] = value;
            }
        });
        return true;
    },

    convertArrayToObject: function(arr) {

        if (angular.isDefined(arr) && angular.isDefined(arr[0])) {
            return arr[0];
        }
        else {
            return {};
        }
    },

    checkEmptyResponse: function(response, responseExpectedType) {

        if (response === 'data is empty!') {
            switch (responseExpectedType) {
                case 'array':
                    response = [];
                    break;
                default:
                    response = {};
                    break;
            }
        }

        return response;
    }
};

/* Extending Array Class.
 * Org. author - John Resig  */
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

