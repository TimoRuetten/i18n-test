
I18NConf.configure({
    languages: ["de", "en"],
    defaultLanguage: 'de',
    autoConfLanguage: false
});

Router.configure({
  layoutTemplate : 'layout',
  i18n : {
    compulsoryLangCode: true,
    langCodeForDefaultLanguage: true
  }
});


Router.route('/', function(){
  this.render('home');
}, {
  name : 'root'
});

Router.route('/about', function(){
  this.render('about');
}, {
  name : 'about'
});


if (Meteor.isClient) {
  I18NConf.onLanguageChange(function (oldLang, newLang) {
    TAPi18n.setLanguage(newLang)
        .done(function () {
            console.log("tap-i18n language changed");
        })
        .fail(function (error_message) {
            // Handle the situation
            console.log("Failure trying to change tap-i18n language: " + error_message);
        });
});
}
