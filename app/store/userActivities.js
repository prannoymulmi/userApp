Ext.define('user.store.userActivities', {
    extend: 'Ext.data.Store',
    model: 'user.model.UserActivities',
    alias: 'store.userActivities',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'data/activities.csv',
        reader: {
            type: 'csv'
        }
    }
});
