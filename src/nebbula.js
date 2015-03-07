// Nebbula version
NEBBULA.version = "0.0.1";

// Init the function
NEBBULA.init = function () {
	NEBBULA.mixins = {};
	NEBBULA.variables = {};
};

// If there's something not implemented, just
// tell that is not implemented.
NEBBULA.read = function (path, callback) {
	throw "Sorry, it's not implemented";
};

// Start here
NEBBULA.init();

// You know what this means
this.NEBBULA = NEBBULA;