// Set up a model to use in our Store
Ext.define('user.model.UserEffects', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'Time',  type: 'date', dateFormat: 'd.m.Y'},
        {name: 'Plan',  type: 'float'},
        {name: 'Actual',  type: 'float'}
    ]
});