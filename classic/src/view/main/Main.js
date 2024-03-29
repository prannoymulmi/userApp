/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).

 */
Ext.define('user.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'user.view.main.MainController',
        'user.view.main.MainModel',
        'user.view.userInfos.List',
        'user.view.userActivities.List',
        'user.view.UsersEffectsMain'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        bind: {
            title: '{users}'
        },
        iconCls: 'fa-user',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        bind: {
            title: '{activities}'
        },
        iconCls: 'pictos pictos-action',
        items: [{
            xtype: 'activityList',
        }]
    }, {
        bind: {
            title: '{effects}'
        },
        iconCls: 'pictos pictos-chart2',
        items: [{
            xtype: 'UsersEffectsMain'
        }]
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '<div class="centerItem">{pageNotExist} <img  src={imgSrc} />{pageNotExistMoreInfo}</div>'
        }
    }]
});
