//The build will inline common dependencies into this file.

requirejs.config({
    baseUrl: "dist/js",
    paths: {
        jquery: "lib/jquery-1.11.3.min",
        bootstrap: "lib/bootstrap-3.3.5-dist/js/bootstrap.min",
        underscore: "lib/underscore",
        "jquery.beta": "lib/jquery.beta-1.0.0",
        "jquery.alpha": "lib/jquery.alpha"
    },
    map: {
        "*": {
            "css": "lib/css"
        }
    },
    shim: {
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        underscore: {
            exports: "_"
        },
        "jquery.alpha": ["jquery"],
        "jquery.beta": ["jquery"],
        "bootstrap": ["jquery", "css!lib/bootstrap-3.3.5-dist/css/bootstrap.min"]
    }
});
