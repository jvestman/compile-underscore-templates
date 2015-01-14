test("the base function exists", function() {
	"use strict";

  ok( compileUnderscoreTemplates );
});

test("compilation return something", function() {
	"use strict";

	var templates = compileUnderscoreTemplates();

	ok( templates );
});

test("compilation returns first template", function() {
	"use strict";

	var templates = compileUnderscoreTemplates();

	ok( templates.fooTemplate );
});

test("compiled template returns constant string", function() {
	"use strict";

	var templates = compileUnderscoreTemplates();

	equal( templates.fooTemplate().trim() , "constant string" );
});

test("compiled template with variable returns variable text", function() {
	"use strict";

	var templates = compileUnderscoreTemplates();

	equal( templates.templateWithVariable( { variable: "variable text"}).trim() , "variable text" );
});

test("compiled template with call to another template works", function() {
	"use strict";

	var templates = compileUnderscoreTemplates();

	equal( templates.templateWithCallToAnotherTemplate().trim() , "constant string" );
});
