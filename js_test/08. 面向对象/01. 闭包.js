/*
* 闭包：
*   形成条件：
*     1. 函数嵌套
*     2. 内部函数引用引用外部函数的局部变量
*     3. 内部的函数被使用
*   作用：
*     1. 延长外部函数局部变量的生命周期
*     2. 在一个函数作用域的外部访问函数作用域内部的变量
*   使用场景：
*     1. 封装组件，封装模块
*     2. Vue，React的声明周期函数中，例如： mounted --> this实例 ---> ajax请求的回调中this
*     3. Vue，React的声明周期函数中，缓存this  let that = this;
*
* 变量提升：
*   1. 全局代码和函数执行前都会做预解析的工作
*   2. 会提前定义一个 变量对象 用来收集当前作用域的变量，函数，函数的参数
*   3. 根据关键字：var function去收集
*   4. 找达var以后即将var后边的变量声明但是不赋值
*   5. 找到function以后提前在变量对象中定义该函数
*   6. 函数的变量提升特殊性： 如果发现内部的函数定义了，但是没有使用的话就不会提前定义该函数。
*
* */

console.log(num);//undefined
var num = 123;

function fun() {
  var a = 123;
  function fun2() {
    var b = 234;
    console.log(a);
    console.log(b);
  }
  
  // fun2();
  return fun2;
}

var fun2 = fun();
fun2();

