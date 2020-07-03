/*
* 原型对象：
*   1. 通常会将公共的方法定义在实例的原型上，只需要定义一次，可以供所有的实例使用
* 原型链：
*   1. 对象使用属性的时候现在自身找，如果自身没有会沿着__proto__去原型对象上找
*   2. 如果还没有，会继续向上查找，直到找到Object.prototype对象，如果还没有就返回undefined
*   3. 所谓的__proto__这条链就是原型链
* 继承：
*   1. 原型继承: 让子类的原型成为父类的实例
*   2. 借用构造函数继承: 父类构造方法在 子类的构造函数中执行, 不是真正意义上的继承
*   3. 组合继承: 原型继承 + 借用构造函数继承
* */


function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.job = function () {
  //   console.log('play basketball()');
  // }
}

Person.prototype.job = function () {
  console.log('play basketball()');
}

//
// let person = new Person('curry', 33);
// let person2 = new Person('wade', 38);
// console.log(person);
// person.job(); // Person.prototype
// person.toString(); // Object.prototype
// person.aaa(); // 报错  undefined()



Child.prototype = new Person();
Child.prototype.constructor = Child;


function Child(name, age, sex) {
  // this.name = name;
  // this.age = age;
  Person.call(this, name, age)
  this.sex = sex;
  
}

let child1 = new Child('zhangsan', 18, '1');
console.log(child1.toString());
child1.job();
console.log(child1);
