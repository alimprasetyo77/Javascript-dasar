class Employee{
    constructor(firstName){
        this.firstName = firstName;
    }
    sayHello(name){
        console.info(`Helo ${name},my name is ${this.firstName}`)
    }
}

class Manager extends Employee{
    constructor(firstName,lastName){
        super(firstName);
        this.lastName = lastName;

    }
    sayHello(name){
        console.info(`Hello ${name},my name is ${this.firstName} ${this.lastName}`);
    }
}
const budi = new Employee('budi');
budi.sayHello('joki')

const eko = new Manager('eko','khannedy');
eko.sayHello('joko')



