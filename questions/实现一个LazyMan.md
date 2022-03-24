## 问题描述

<!-- 第一步：请使用「规范的md格式」详细描述问题 -->

<!-- 请二步：请在右侧选择合适的一到多个标签 -->

实现一个 LazyMan，按照以下方式调用时，得到相关输出。

不要过度设计，代码简洁优雅。

```js
LazyMan("Hank")
// Hi! This is Hank!

LazyMan("Hank").sleep(10).eat("dinner")
// Hi! This is Hank!
// 等待了 10 秒后
// Wake up after 10
// Eat dinner~
 
LazyMan("Hank").eat("dinner").eat("supper")
// Hi This is Hank!
// Eat dinner~
// Eat supper~
 
LazyMan("Hank").sleepFirst(5).eat("supper")
// 等待了 5 秒后
// Wake up after 5
// Hi This is Hank!
// Eat supper
```

