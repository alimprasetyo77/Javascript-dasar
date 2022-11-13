const person = {
    name : 'alim',
    sayHello : function(name){
        console.info(`hello ${name}, my name is ${this.name}`);
    }
}
person.sayHello('budi')
person.sayHello('eko')