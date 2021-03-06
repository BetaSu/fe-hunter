<!-- {name: 'config', type: 'diy'} -->
### 要实现的功能

实现json与Vue模板相互转换：

```javascript
// 给定的数据源
const data = {
  name: {
    value: 'byoungd',
    style: {
      bold: true,
      italic: true,
      inline: false,
    },
    tag: 'p',
  },
  age: {
    value: 18,
    style: {
      bold: false,
      italic: true,
    },
    tag: 'h2',
  },
  skills: [
    {
      id: '0',
      value: 'Vue',
      style: {
        bold: true,
        italic: false,
      },
      tag: 'span',
    },
    {
      id: '1',
      value: 'React',
      style: {
        bold: true,
        italic: false,
      },
      tag: 'span',
    },
    {
      id: '2',
      value: 'Rust',
      style: {
        bold: false,
        italic: true,
      },
      tag: 'span',
    },
  ],
}

// 用户简单地生成样式字符串
const styleHelper = (style) => {
  const dict = {
    bold: 'font-weight: bold;',
    italic: 'font-style: italic;',
  }
  return Object.keys(style)
    .map((key) => (style[key] ? dict[key] : ''))
    .filter((str) => str)
    .join(';')
}
```

// 预期的 templateString 为

```javascript
const templateString = `<template>
  <div>
    <div>
      <p :style="styleHelper(name.style)">{{ name.value }}</p>
    </div>
    <div>
      <h2 :style="styleHelper(age.style)">{{ age.value }}</h2>
    </div>
    <div v-for="skill in skills" :key="skill.id">
      <span :style="styleHelper(skill.style)">{{ skill.value }}</span>
    </div>
  </div>
</template>
`

const createTemplate = Fn

// 这里的 === 仅仅用于说明 表示可以相互转换
templateString === createTemplate(data)
data === parseTemplate(templateString)
```

实现 `createTemplate` 和 `parseTemplate` 函数

### 代码示例

```javascript
// createTemplate函数： 输入的模板字符串需要和createTemplate处理后生成的一致
console.log(templateString === createTemplate(data))

// 预期为 true


// parseTemplate函数： 由于对象的对比稍微复杂一些，我们暂且认为只要是值key value是正确的即可
console.log(JSON.stringify(data) === JSON.stringify(parseTemplate(templateString)))

// 预期为 true

```

### 最佳答案评选标准

- 限定使用`typescript`
- 需要提供 `codesandbox/stackblitz` 在线示例
- 需要满足两者的相互转换
- 拓展性 如果data的数据更复杂一些 需要可以正常转换
- 安全性 需要处理符号转义