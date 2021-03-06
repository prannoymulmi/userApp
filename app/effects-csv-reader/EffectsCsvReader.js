/**
 * A Class which reads the file effects.csv and then parses the effects data which then the actuals and planned data can be seperate by year
 * i.e Planned 2016, Actual 2016 is the key for the data and the month gives the date.
 *
 */
Ext.define('EffectsCsvReader', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.effectsCsv',
    //Overriding the function to make a custom data
    getResponseData : function(response) {
        var lines = response.responseText.split("\n");
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

        //Check the data which year it belongs to and create the coresponding key for it and add it to the correct month object
        for(var i = 1; i < lines.length; i++) {
            if (lines[i] == "") continue;
            var bits = lines[i].split(";");
            var splitDate = bits[0].split('.');
            //Check if the date is in german format to instatiate the correct new date object
            var date = splitDate.length > 1 ? new Date(splitDate[2], splitDate[1] - 1, splitDate[0] ) : new Date(bits[0]);

            // Adding datas wih Keys to specific month
            months[date.getMonth()]['Planned'+ date.getYear()] = bits[1];
            months[date.getMonth()]['Actual'+ date.getYear()] = bits[2];
        }

        this.callParent([months]);
        return months;
    }
});