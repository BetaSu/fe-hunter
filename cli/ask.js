const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const templatesPath = path.resolve(__dirname, '../templates');
const questionsPath = path.resolve(__dirname, '../questions');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: '问题的类型是什么？',
    choices: [
      '场景题：发生在某一场景下的技术问题', 
      '动手题：写代码实现某一功能', 
      '职场题：程序员在职场中会遇到的问题',
      '基础题：经典面试题、基础前端问题'
    ],
    filter(val) {
      return val.replace(/(.+)：.+/, function(_, type) {
        return type;
    })
    },
  },
  {
    type: 'input',
    name: 'title',
    message: '要提的问题是？',
    validate(value, {type}) {
      if (type === '动手题' && !value.startsWith('实现')) {
        return '动手题标题格式为：实现xxxxx'
      }
      if (type !== '动手题' && (
        !value.endsWith('？') &&
        !value.endsWith('?')
      )) {
        return '问题请以？结尾'
      }
      return true;
    },
    filter: String,
  }
];

inquirer.prompt(questions).then(({type, title}) => {
  const tempList = fs.readdirSync(templatesPath);
  tempList.forEach(tempName => {
    if (!tempName.includes(type)) {
      return;
    }
    const tempContent = fs.readFileSync(path.resolve(templatesPath, `./${tempName}`), {encoding: 'utf-8'});
    const targetQuestionPath = path.resolve(questionsPath, `./${title}.md`);
    fs.writeFileSync(targetQuestionPath, tempContent);
    console.log(`✅ 请在 ${targetQuestionPath} 中编辑问题`);
  })
});