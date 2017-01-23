// Set up a model to use in our Store for user Actvities
Ext.define('user.model.UserActivities', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'Activity', type: 'string'},
        {name: 'Planned Start',  type: 'date', dateFormat: 'd.m.Y'},
        {name: 'Actual Start', type: 'date', dateFormat: 'd.m.Y'},
        {name: 'Planned End',  type: 'date', dateFormat: 'd.m.Y'},
        {name: 'Actual End',  type: 'date', dateFormat: 'd.m.Y'},
        {name: 'Responsible user',  type: 'string'},
        {name: 'progress',  type: 'float'}
    ]
});