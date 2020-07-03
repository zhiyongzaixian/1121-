// 回文 字符串: 上海自来水来自海上

let str = '上海自来水来自海上'
let str2 = 'sdfsdf上海自来水来自海上'

function isHuiWen(str) {
  return str === str.split('').reverse().join('')
}


console.log(isHuiWen(str));
console.log(isHuiWen(str2));
