(function(root, undefined) {

  "use strict";


/* compile-underscore-templates main */

// Base function.
var compileUnderscoreTemplates = function() {
  
  var templates = {};
  $( 'script[type="underscore_template"]' ).each( function(){ templates[ _.str.camelize( $(this).attr('id') ) ] = _.template( $(this).html(), null, { imports: templates } ); });
  return templates;

};


// Version.
compileUnderscoreTemplates.VERSION = '0.0.1';



// Export to the root, which is probably `window`.
root.compileUnderscoreTemplates = compileUnderscoreTemplates;


}(this));
