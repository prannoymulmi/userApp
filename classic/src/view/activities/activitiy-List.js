/**
 * This view is an example list of people. This is just a simple List which cannot be manipulated
 */
Ext.define('user.view.userActivities.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'activityList',

    requires: [
        'user.view.userActivities.ListModel'
    ],
    viewModel:{
        type: 'activityListModel'
    },

    bind: {
        title: '{title}',
        store: {
            type: 'userActivities'
        }
    },

    columns: [
        { text: 'Activity',  dataIndex: 'Activity', flex: 1 },
        { text: 'Planned Start', dataIndex: 'Planned Start', flex: 1 },
        { text: 'Actual Start', dataIndex: 'Actual Start', flex: 1 },
        { text: 'Planned End', dataIndex: 'Planned End', flex: 1 },
        { text: 'Actual End', dataIndex: 'Actual End', flex: 1 },
        { text: 'Responsible user', dataIndex: 'Responsible user', flex: 1 }
    ]
});
