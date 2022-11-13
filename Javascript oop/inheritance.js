class Employee {
    sayHello(name){
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
}
class Manager extends Employee { //mengcopy yang ada di Employee
    // sayHello(name){
    //     console.info(`hello ${name}, my name is ${this.name}`)
    // }
}

const budi  = new Employee();
budi.name = 'budi';
budi.sayHello('joki');

const eko = new Manager();
eko.name = 'eko';
eko.sayHello('joki');

console.log(budi)
console.log(eko)