//Load common code that includes config, then load the app logic for this page.

requirejs(['../common'], function (common) {

    // 依赖数组中引入jquery
    requirejs(['jquery'], function () {
        $(function () {
            $("#testdiv").text("我是自动生成的！");
        });
    });

});