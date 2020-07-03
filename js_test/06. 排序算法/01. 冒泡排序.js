// 冒泡排序
/*
* 1. 每一轮会将未排序的所有元素进行pk，找出最大或者最小的元素，然后将其放置在最前或者最后
* 2. 前后两个元素对比的时候，比较完大小，根据排序规则(升序，降序)交换位置
* 3. 需要两个for循环，一个负责控制pk的轮数，一个负责循环遍历所有的元素
* */




let arr = [2,3,7,4,1,5,6];

let a = 1;
let b = 2;
// 不借助任何第三方变量，交换a 和 b的值， a = 2, b = 1

a = a + b;
b = a - b;
a = a - b;

function maoPao(arr) {
  // 控制pk的轮数：arr.length - 1
  for (var i = 0; i < arr.length; i++) {
    // 负责每一轮pk的时候遍历所有的元素, 注意：每次pk一轮之后，j的条件应该减1
    for (var j = 0; j < arr.length - 1 - i; j++) {
      // 升序: 前后两者对比，如果前边的元素比后边的元素大，就交换位置
      if(arr[j] > arr[j + 1]){
        arr[j] = arr[j] + arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j + 1];
      }
    }
  }
  
  return arr;
}
console.log(maoPao(arr));
