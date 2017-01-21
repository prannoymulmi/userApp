Ext.define('user.store.userInfos', {
    extend: 'Ext.data.Store',
    model: 'user.model.Infos',

    alias: 'store.userInfos',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'data/users.csv',
        reader: {
            type: 'csv'
        }
    }
});
