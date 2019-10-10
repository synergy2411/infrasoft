"use strict";
// Classes & Inheritance
// Module system
// Arrow functions
exports.__esModule = true;
// var numbers = [1,2,3,4,5];
// var doubleArray = numbers.map(function(value){
//     return value * 2;
// });
// var doubleArray = numbers.map( (value, i) => {
//     console.log(i);
//     return value * 2
// });
// console.log(doubleArray);
// var user = {
//     firstName: "Foo",
//     lastName: "Bar",
//     fullName : function(){
//         var nestedFunc = () => this.firstName + " " + this.lastName;
//         // var that = this;
//         // function nestedFunc(){
//         //     return that.firstName + " "+ that.lastName;
//         // }
//         return nestedFunc();
//     }
// }
// console.log(user.fullName());
// Template String (``)
// var username = "Foo";
// console.log(`Hello
// ${username}!`);
// Constants and block scopes (const & let)
// function demo(arr){
//     if(arr.length > 2){
//         let load = "LOADING";
//         console.log(flash);             //?
//     }else{
//         let flash = "FLASHING";
//     }
// }
// demo([1,2,5,3])
// Destructuring - Object / Array
// let user = {
//     fname : "Foo",
//     lname :"Bar",
//     age : 32
// }
// let {lname, fname} = user;
// console.log(fname);
// let arr = ["foo", "bar", "bam", "bas"];
// let [arr1, arr2, arr3, arr4] = arr;
// // console.log(arr3);      //?
// arr3 = "Something";
// console.log(arr);
// Spread & Rest operators (...)
// function demo(fname, ...args){
//     console.log(args[0]);       // ?
// }
// demo("foo")
// demo("foo", "bar")
// demo("foo", "bar", 32)
// let num = [3, 4, 5];
// let newNum = [1, 2, ...num, 6, 7];
// console.log(newNum);        //?
// Decorators
// @NgModule({
// })
var student_1 = require("./student");
var foo = new student_1.Student("Foo", "Bar", 32);
console.log(foo.sayHi());
// Additional types
// void , enum, any
var x = "Something";
x = true;
x = 32;
