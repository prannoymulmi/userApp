/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('user.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'user',
        users: 'Users',
        activities : 'activities',

        pageNotExist: '<h1>Ahhhh !! This page does not Exist for NOW</h1>',
        pageNotExistMoreInfo : '<h2>Not to Worry. You can still click the other two links,or sit there and listen to a goat scream like a human.</h2> '
    }

});
