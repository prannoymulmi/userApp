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

        pageNotExist: '<h1>Ahhhhhhhhh !! This page does not Exist for NOW</h1>',
        pageNotExistMoreInfo : '<h4>Not to worry. You can either head back to the other Links, or sit here and enjoy the goats hospitality.</h4> ',
        imgSrc: 'resources/img/goat.jpg'
    }

});
