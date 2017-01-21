/**
 * This view is an example list of people. This is just a simple List which cannot be manipulated
 */
Ext.define('user.view.userInfos.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'user.view.userInfos.ListModel'
    ],
    viewModel:{
        type: 'listModel'
    },

    bind: {
            title: '{title}',
            store: {
                type: 'userInfos'
            }
    },

    columns: [
        { text: 'Name',  dataIndex: 'Name', flex: 1 },
        { text: 'Firstname', dataIndex: 'Firstname', flex: 1 },
        { text: 'Lastname', dataIndex: 'Lastname', flex: 1 },
        { text: 'Department', dataIndex: 'Department', flex: 1 },
        { text: 'E-Mail', dataIndex: 'E-Mail *', flex: 1 },
        { text: 'Login', dataIndex: 'Login', flex: 1 },
        { text: 'Status', dataIndex: 'Status', flex: 1 }
    ]
});
