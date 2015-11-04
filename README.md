# HeTry-RequireJS-HugeDemo
本项目RequireJS综合示例，包含了RequireJS的主要用法。

## 页面
不同页面演示的用法重点不一样。

### page1.html
本页面将引用jQuery，然后操作DOM。

这是RequireJS最简单最常用法，同理也可按此用法引入其他的模块。

### page2.html
本页面将引用jQuery的两个插件。注意由于在shim中配置了依赖，因此依赖数组中可以不加"jquery"，RequireJS会自动处理好依赖。

### page3.html
本页面将引用jQuery，并按需加载Bootstrap，包括其js和css文件。当然这么做是有前提的，如果所有页面都使用Bootstrap，我们还是推荐直接在head中使用link加载样式文件。因为动态加载意味着可能会由于网络加载而导致页面出现“闪动”。你可以在本页中不停按F5刷新页面感受下！

我们使用了[require-css](https://github.com/guybedford/require-css)来做样式模块加载，具体使用方法可以参考[RequireJS按需加载样式文件](http://segmentfault.com/a/1190000002390643)。

## 其他
我们欢迎您给出诚恳的建议，更欢迎您也加入其中。