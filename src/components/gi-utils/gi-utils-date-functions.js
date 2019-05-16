
var GIDateTimeUtil = {
    getCurrentDate : function(format){
        var d = new Date(),
            year = d.getFullYear(),
            month = d.getMonth()+ 1,
            day = d.getDate();

        if (month<10){
            month="0" + month;
        };

        switch(format){
            case 'dd-mm-yyyy':
                return day + "-" + month + "-" + year;
            case 'yyyy-mm-dd':
                return year + "-" + month + "-" + day;
            default:
                return {day:day, month: month, year: year};
        };
    },

    getPassedDate: function(format, timespan){
        var d = new Date(),
            year = d.getFullYear(),
            month = d.getMonth()+ 1,
            day = d.getDate();

        if (month<10){
            month="0" + month;
        };

        switch(timespan.key){
            case 'day':
                day = day - timespan.val;
                break;
            case 'month':
                month = month - timespan.val;
                break;
            case 'year':
                year = year - timespan.val;
                break;
            default:
            //nothing
        };

        switch(format){
            case 'dd-mm-yyyy':
                return day + "-" + month + "-" + year;
            case 'yyyy-mm-dd':
                return year + "-" + month + "-" + day;
            default:
                return {day:day, month: month, year: year};
        };
    },

    getCurrentTimestamp:function(dateFormat, timeFormat){
        var formattedDate = getCurrentDate(dateFormat),
            dt = new Date(new Date().getTime() * 1000),
            hours = dt.getHours(),
            minutes = dt.getMinutes(),
            seconds = dt.getSeconds();

        if (hours < 10)
            hours = '0' + hours;

        if (minutes < 10)
            minutes = '0' + minutes;

        if (seconds < 10)
            seconds = '0' + seconds;

        switch(timeFormat){
            case 'h:m:s':
                return formattedDate + " " + hours + ":" + minutes + ":" + seconds;
            default:
            //Nothing
        };
    }
};