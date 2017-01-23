/**
 * This view is an example list of people. This is just a simple List which shows the users Info
 */
Ext.define('user.view.userActivities.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'activityList',

    requires: [
        'user.view.userActivities.ListModel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.form.*',
        'Ext.ProgressBarWidget'
    ],

    viewModel: {
        type: 'activityListModel'
    },

    bind: {
        title: '{title}',
        store: {
            type: 'userActivities'
        }
    },

    columns: [
        {
            text: 'Activity',
            dataIndex: 'Activity',
            editor: {
                completeOnEnter: false,
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            flex: 1
        }, {
            text: 'Planned Start',
            dataIndex: 'Planned Start',
            xtype: 'datecolumn',
            width: null,
            format: 'M d, Y',
            flex: 1,

        }, {
            text: 'Actual Start',
            dataIndex: 'Actual Start',
            xtype: 'datecolumn',
            width: null,
            format: 'M d, Y',
            flex: 1
        }, {
            text: 'Planned End',
            dataIndex: 'Planned End',
            xtype: 'datecolumn',
            width: null,
            format: 'M d, Y',
            flex: 1
        }, {
            text: 'Actual End',
            dataIndex: 'Actual End',
            xtype: 'datecolumn',
            width: null,
            format: 'M d, Y',
            flex: 1
        }, {
            text: 'Responsible user',
            dataIndex: 'Responsible user',
        }, {
            text     : 'Progress',
            xtype    : 'widgetcolumn',
            width    : 120,
            dataIndex: 'Progress',
            widget: {
                xtype: 'progressbarwidget',
                textTpl: [
                    '{percent:number(0)}% done'
                ]
            }
        }
    ]
});
