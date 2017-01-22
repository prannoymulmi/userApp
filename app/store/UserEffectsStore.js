Ext.define('user.store.userEffects', {
    extend: 'Ext.data.Store',
    model: 'user.model.UserEffects',
    alias: 'store.userEffects',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'data/effects.csv',
        reader: {
            type: 'effectsCsv'
        }
    }
});
