function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function (name){
        console.info(`hello ${name} , my name is ${firstName}`)
    }
}

function Manager(firstName,lastName){
    this.lastName = lastName;
    Employee.call(this,firstName);
}
const eko = new Manager('eko','khannedy');
console.info(eko)
