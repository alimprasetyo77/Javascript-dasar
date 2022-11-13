class Person {
    constructor(name){
        this.name = name ;
    }
    sayHello(name){
        console.info(`hello ${name}, my name is ${this.name}`)
    }
}

const eko = new Person('eko');
eko.sayHello('alim')

const budi = new Person('budi');
budi.sayHello('toriq')

console.info(eko)
console.info(budi)