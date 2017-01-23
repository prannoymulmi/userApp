/**
 * The Tabbed View from where you can route to the charts you want to see
 */
Ext.define('user.view.UsersEffectsMain', {
    extend: 'Ext.tab.Panel',
    xtype: 'UsersEffectsMain',
    required: ['user.view.userEffectsView16', 'user.view.userEffectsView17', 'user.view.userEffectsView18'],


    layout: {
        pack: 'center'
    },
    frame: true,
    defaults: {
        bodyPadding: 10,
        scrollable: true
    },
    items: [{
        title: 'Charts 2016',
        xtype: 'userEffectsView16'
    }, {
        title: 'Charts 2017',
        xtype: 'userEffectsView17'
    }, {
        title: 'Charts 2018',
        xtype: 'userEffectsView18'
    }]
});