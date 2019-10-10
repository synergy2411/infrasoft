"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
    }
    Student.prototype.sayHi = function () {
        return "Hello " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
