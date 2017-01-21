// Set up a model to use in our Store
Ext.define('user.model.UserActivities', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'Activity', type: 'string'},
        {name: 'Planned Start',  type: 'string'},
        {name: 'Actual Start',  type: 'string'},
        {name: 'Planned End',  type: 'string'},
        {name: 'Actual End',  type: 'string'},
        {name: 'Responsible user',  type: 'string'}
    ]
});