/**
 * A Class which overrides the Ext.data.reader.Json so that we can read the csv
 * file and convert it into the json which can be then called with the help of the proxy.
 */

Ext.define('EffectsCsvReader', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.effectsCsv',
    //Overriding the function to make a custom data
    getResponseData : function(response) {
        var lines = response.responseText.split("\n");
        var colNames = lines[0].split(";");
        const records = [];
        var months = [{ month: 'Jan' },
            { month: 'Feb' },
            { month: 'Mar' },
            { month: 'Apr' },
            { month: 'May' },
            { month: 'Jun' },
            { month: 'Jul' },
            { month: 'Aug' },
            { month: 'Sep' },
            { month: 'Oct' },
            { month: 'Nov' },
            { month: 'Dec' }
        ];

        for(var i = 1; i < lines.length; i++) {
            if (lines[i] == "") continue;
            var bits = lines[i].split(";");
            var splitDate = bits[0].split('.')
            var date = splitDate.length > 1 ? new Date(splitDate[2], splitDate[1] - 1, splitDate[0] ) : new Date(bits[0]);

            months[date.getMonth()]['Planned'+ date.getYear()] = bits[1];
            months[date.getMonth()]['Actual'+ date.getYear()] = bits[2];
        }

        this.callParent([months]);
        return months;
    }
});