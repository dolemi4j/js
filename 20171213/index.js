function fun1() {
    if(true) {
        var x = 5;
    }
}
fun1();
//console.log(x);
/** 
*    变量的作用域--变量所在的函数范围或全局变量，而不是例如if{ var x = xxx}包裹的语句块
*               变量声明提升
*   你可以引用稍后声明的变量，而不会出现异常
*   ----javascript的变量像是被提升到了所有函数和语句之前---，但是这个被提升的引用返回undefine的值
*   let用于声明一个快作用域的局部变量
*   const用于声明一个只读的常量
*
*/
//console.log(a); //a is not defined
let a = 100;

if(true) {
   let b = 200;
}
//console.log(b); not define
if(true) {
    const b = 200;
 }
//console.log(b); not define

var s = "global variable";

function fun2() {
    console.log(s); //undefine

    var s = "local variable";
}
fun2();

/**
 * undefined在布尔环境中会被解析为false,数值环境中undefined运算后还被转换为NaN
 * null在布尔环境解析为false，数值环境解析为0
 */
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof NaN) //number
console.log(typeof 10) //number
/**
 *         函数提升 
 * 对于JavaScript的函数而言，只有函数声明会被提升到顶部，而不包括函数表达式
 * 
 * foo();//success
 * 函数声明
 * function  foo() {
 *      bar...
 * }
 * 
 * 
 * foo();//exception:foo is not a function
 * 函数表达式
 * var foo = function() {
 *      bar...
 * }
 * 
 * 
 * 
 * 
 */
 if(-100) { //false
     console.log("xxx")
 }

//fun3(); 

var fun3 = function fun3() {
    console.log(111) //111
}