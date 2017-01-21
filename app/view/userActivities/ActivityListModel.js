/**
 * This class is the view model for the grid View of the users Activities Task 2 of the application.
 */
Ext.define('user.view.userActivities.ListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.activityListModel',

    data: {
        title: 'User Activities'
    },

    store: {
        type: 'userActivities'
    }
});