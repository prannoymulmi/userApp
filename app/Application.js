/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('user.Application', {
    extend: 'Ext.app.Application',
    
    name: 'user',

    stores: [
        'user.store.userInfos',
        'user.store.userActivities',
        'user.store.userEffects'
    ],
    requires: ['user.view.userInfos.ListModel', 'user.view.userActivities.ListModel'],
    
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
