<!-- 
  标题：
    请将文件保存为 “你要提的问题”.md 
  比如：
    实现一个串行请求队列.md
-->

### 要实现的功能

我们可以使用`new`实例化一个构造函数，请根据**实例化过程中构造函数内部工作流程**，实现类似功能的`MyNew`方法。
<!--
  说明：
    描述要实现的方法的具体功能
  比如：
    对于异步请求ajaxN，其中N代表请求的执行时间，如ajax1代表请求1秒后返回。实现一个串行请求队列serial函数，接收包含异步请求的数组，按顺序依次执行。
 -->

### 代码示例

```js
function MyNew(fn, ...args) {
  // 实现...
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const kasong = MyNew(Person, 'KaSong', 18);
console.log(kasong.age); // 18

function Something(name) {
  this.name = name;
  return {name: 'something'};
}
const something = MyNew(Something, 'XiaoMing');
console.log(something.name); // something
```

<!--
  说明：
    用代码演示方法执行后的效果，请给出多个用例，方便答题者清楚明白题意
  比如：
    ```js
      const ajaxArr: Ajax[] = [ajax1, ajax2, ajax4];
      function serial(ajaxArr: Ajax[]) {
        // 实现...
      }

      serial(ajaxArr)
      // 1秒后ajax1请求完毕
      // 再过2秒，ajax2请求完毕
      // 再过4秒，ajax4请求完毕
    ```
 -->

 ### 问题补充

 <!--
  说明：
    补充影响答案质量的其他因素
  比如：
    1. 请写出实现思路、代码，并为代码的关键步骤增写注释
    2. 附带测试用例是加分项
    3. 不需要考虑异常发生
    4. 不过度设计，代码简洁优雅是加分项
 -->

1. 请阐述**实例化过程中构造函数内部工作流程**
2. 请写出代码，并为代码的关键步骤增写注释
3. 附带测试用例是加分项
4. 不需要考虑异常发生
5. 不过度设计，代码简洁优雅是加分项