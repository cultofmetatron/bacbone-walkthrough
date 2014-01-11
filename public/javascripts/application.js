(function() {
  var app = {};


  //Backbone Code goes here












  //stub code to load templates
  app.loadTemplates = function() {
    window.templates = {};
    var $sources = $('script[type="text/template"]');
    $sources.each(function(index, el) {
      var $el = $(el);
      templates[$el.data('name')] = _.template($el.html());
    });
  };

  app.init = function() {
    this.loadTemplates();

    //actually initialize our objects

  };


  //starts our app
  $(_.bind(app.init, app));
}).call(this);
