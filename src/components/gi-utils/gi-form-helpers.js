'use strict';

var GIFormHelpers = {

    getFormData: function(json) {

        var payload = new FormData();

        angular.forEach(json, function(value, key) {
            payload.append(key, value);
        });

        return payload;
    }
};

