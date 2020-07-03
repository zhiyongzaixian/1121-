/*

 事件队列分类：
* 宏任务队列 VS 微任务队列
* 宏任务队列:
*   1. 宏任务队列用于放置所有的宏任务
*   2. 宏任务队列中的宏任务不会一次性全部执行完
*   3. 每执行一次宏任务之前都会先看微任务队列是否有可执行的微任务(如果有，就先执行微任务队列中的所有微任务，执行完所有的微任务以后才会执行下一个宏任务)
*   4. 常见的宏任务：定时器的回调  事件的回调 ajax的回调
* 微任务队列：
*   1. 微任务队列用于放置所有的微任务
*   2. 微任务队列中的微任务会一次性全部执行完
*   3. 常见的微任务： promise的回调
* js代码的执行顺序：
*   1. js是单线程的，首先会执行主线程上的同步代码
*   2. 主线程上的同步执行完之后执行事件队列的任务代码
* */


console.log(0);
setTimeout(() => {
  console.log(1);
}, 0)

new Promise(function (resolve, reject) {
  console.log(2);
  resolve();
}).then(() => {
  console.log(3);
  
  new Promise(function (resolve, reject) {
    console.log(5);
    resolve();
  }).then(() => {
    console.log(6);
  })
  
  
})

console.log(4);
// 0 2 4 3 5 6 1
