
// _.chunk(arr, 4) // [[1,2,3,4], [5,6,7,8,], [9]]


// slice  splice
let test = [1,2,3,4,5,6,7,8,9];
// console.log(test.slice(0, 4)); // 不会影响原数组
// console.log(test.slice(4, 8)); // 不会影响原数组

// console.log(test.splice(0, 4)); // splice会影响原数组
// console.log(test.splice(0, 4)); // splice会影响原数组


/*
* 思路：
*   1. 选择splice， 因为splice会影响原数组，每次截取后不需要记录上一次截取的位置
*   2. 每次截取之后剩余的数组的length只要大于size就应该继续截取
*   3. 参数：arr必须是数组， size必须是number且大于0
*
* */
let arr = [1,2,3,4,5,6,7,8, 9]
let num = 123;
// console.log(typeof num);
// console.log(Object.prototype.toString.call(arr).slice(8, -1)); // [object Array]
// console.log(Object.prototype.toString.call(num).slice(8, -1)); // [object Number]
// console.log(arr.toString());


function chunk(arr, size) {
  // 防止影响原数组： 深拷贝一份新的数组
  arr = JSON.parse(JSON.stringify(arr)) // 不能处理有函数的数组
  
  // 判断找出不符合切割条件的直接返回
  if(!Array.isArray(arr) || Object.prototype.toString.call(size).slice(8, -1) !== 'Number' || size <= 0){
    return arr;
  }
  // 根据条件切割
  let result = [];
  while(arr.length >= size){
    result.push(arr.splice(0, size))
  }
  arr.length && result.push(arr);
  return result;
}
console.log(chunk(arr, 4));
console.log(arr);
// console.log(chunk(arr, -1));
// console.log(chunk(num, 4));
