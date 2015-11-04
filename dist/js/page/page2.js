//Load common code that includes config, then load the app logic for this page.

requirejs(['../common'], function (common) {

    // 由于在shim中配置了依赖，因此依赖数组中可以不加"jquery"
    requirejs(["jquery.alpha", "jquery.beta"], function () {
        $(function () {
            $('body').alpha().beta();
        });
    });

});