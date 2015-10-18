// async loader for fonts
// https://github.com/typekit/webfontloader

Meteor.startup(function() {

  (function() {
    var wf = document.createElement('link');
    wf.href = 'https' +
      '://fonts.googleapis.com/icon?family=Material+Icons';
    wf.rel = 'stylesheet';
    wf.async = 'true';
    var s = document.getElementsByTagName('link')[0];
    s.parentNode.insertBefore(wf, s);
    console.log("async fonts loaded");
  })();

})