// Set up a model to use in our Store For User Effects
Ext.define('user.model.UserEffects', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'Time',  type: 'date', dateFormat: 'd.m.Y'},
        {name: 'Plan',  type: 'string'},
        {name: 'Actual',  type: 'string'}
    ]
});