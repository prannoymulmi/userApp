/**
* This class is the view model for the grid View of the users Informtion Task 1 of the application.
*/
Ext.define('user.view.userInfos.ListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.listModel',

    data: {
        title: 'User Informations'
    },

    store: {
        type: 'userInfos'
    },
});