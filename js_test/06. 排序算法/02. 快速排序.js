// 二叉树算法
// 游戏： 两个人玩游戏，其中一个人想一个1-100的数，另一个人猜对方想的是几，正常情况下7次能够猜对
// 核心思想： 一分为二，取中间值

// 1-100
// 68
// 1-50 || 51 - 100
// 51 - 75 || 76 - 100
// 51 - 62 || 63 - 75
// 63 - 68 || 69 - 75
// 63 - 65 || 66 - 68
// 66 - 68  67 66

// 快速排序
/*
* 1. 取目标数组的中间值
*
*
* */
let arr = [2,3,7,4,1,5,6];
// 中间值： 4
// 目标数组： [2,3,7,1,5,6]
// 定义两个新数组，用于放置中间值左边的数据和中间值右边的数据
// [2, 3, 1] 4 [7, 5,6]
// [2, 1] 3 []  4 [] 5 [7 , 6]
// [] 1 [2] 3 [] 4 [] 5 [6] 7 [] ---> [1,2,3,4,5,6,7]
function qucikSort(arr) {
  // 递归结束条件
  if(arr.length <= 1){
    return arr; // 不满足条件的情况下，不拆分，返回原数组
  }
  
  // 1. 取中间值
  let flag = Math.floor(arr.length / 2);
  let flagValue = arr.splice(flag, 1)[0];
  let leftArr = [];
  let rightArr = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    
    if(arrItem > flagValue){
      rightArr.push(arrItem)
    }else{ // <=
      leftArr.push(arrItem)
    }
  }
  // 递归： 注意点：必须有结束条件，否则就是死循环
  leftArr = qucikSort(leftArr);
  rightArr = qucikSort(rightArr);
  return  [...leftArr, flagValue, ...rightArr]
}

console.log(qucikSort(arr)); //
