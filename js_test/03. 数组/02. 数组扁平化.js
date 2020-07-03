// 数组扁平化：将多维数组将转成一维数组
// 一维： [1,2,3,4,5]   多维： [1,2,[3,4, [5,6]]]

let arr = [1,2,[3,4, [5,6]]];

// concat() 不改变原数组，而是返回一个新的数组
// let test = [1,2];
// console.log(test.concat(3)); // [1, 2, 3]
// console.log(test.concat([4,5])); // [1, 2, 4, 5]

function arrFlatten(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    if(Array.isArray(arrItem)){
      result = result.concat(arrFlatten(arrItem))
    }else {
      result = result.concat(arrItem)
    }
  }
  return result;
}

console.log(arrFlatten(arr));

// reduce 累加器
function arrFlatten2(arr) {
  return arr.reduce((result, arrItem) => {
    return result.concat(Array.isArray(arrItem)?arrFlatten2(arrItem):arrItem)
  }, [])
}


console.log(arrFlatten2(arr));

// ES6
let arrFlatten3 = arr => arr.reduce((result, arrItem) => result.concat(Array.isArray(arrItem)?arrFlatten2(arrItem):arrItem), [])
console.log(arrFlatten3(arr));
