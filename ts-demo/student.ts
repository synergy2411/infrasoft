export class Student{
    // private firstName : string;
    private lastName : string;
    private age : number;

    constructor(private firstName : string, lastName : string, age : number){
        // this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
    }
    sayHi(): string{
        return "Hello "+  this.firstName + " " + this.lastName;
    }
}