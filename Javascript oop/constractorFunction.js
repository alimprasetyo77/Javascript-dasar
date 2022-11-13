function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(name){
        console.info(`hello ${name} , my name is ${firstName}`)
    }
}
const eko = new Person('Eko','Khannedy');
eko.sayHello('budi');

const alim = new Person('alim','prasetyo');
alim.sayHello('budi');

console.info(eko);
console.info(alim);