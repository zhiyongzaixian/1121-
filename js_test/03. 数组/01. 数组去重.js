let arr = [2,1,2,4,3,2,5,3,4];



// ES5
function uniqArr(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    // 什么时候添加arrItem至result中
    if(result.indexOf(arrItem) === -1){
      result.push(arrItem)
    }
  }
  return result;
}
console.log(uniqArr(arr));


// ES6 Set容器：  用于存放多个不重复的value
console.log(new Set(arr));
function uniqArr2(arr) {
  let result = [];
  let set = new Set(arr);
  // for of专门用于供iterator接口使用，如果某个数据身上有iterator接口，那么改数据就是可以迭代的
  // 三点运算符 专门用于供iterator接口使用
  for(let item of set){
    result.push(item)
  }
  return result;
}


console.log(uniqArr2(arr));



function uniqArr3(arr) {
  // let set = new Set(arr);
  // 三点运算符 专门用于供iterator接口使用
  return [...new Set(arr)];
}
console.log(uniqArr3(arr));

// 箭头函数 + 三点运算符 + Set容器
let uniqArr4 = arr => [...new Set(arr)];

console.log('uniqArr4: ', uniqArr4(arr));

