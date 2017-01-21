/**
 * A Class which overrides the Ext.data.reader.Json so that we can read the csv
 * file and convert it into the json which can be then called with the help of the proxy.
 */

Ext.define('CsvReader', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.csv',
    //Overriding the function to make a custom data
    getResponseData : function(response) {
        var lines = response.responseText.split("\n");
        var colNames = lines[0].split(";");
        const records = [];

        for(var i = 1; i < lines.length; i++) {
            if (lines[i] == "") continue;
            const record = {};
            var bits = lines[i].split(";");
            for(var j = 0; j < bits.length; j++) {

                //Check if there are some non-printable chars present including a space and remove it
                //from the colname
                // Took me a while to figure it out because the last colum was not showing
                //But Figured it :)
                var colName = colNames[j].replace(/[^\x20-\x7E]+/g, '');
                record[colName] = bits[j];
            }
            records.push(record)
        }

        this.callParent([records]);
        return records;
    }
});