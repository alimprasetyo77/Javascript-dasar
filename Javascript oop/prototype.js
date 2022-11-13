function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(name){
        console.info(`helo ${name},my name is ${firstName}`)
    }    
}

Person.prototype.sayBye = function () { // ibaratkan menambahkan method baru kedalam object person tapi lewat prototype 
    console.info('good bye')
}
Person.prototype.run = function () {
    console.info(`${this.firstName} is running`)
}

const eko = new Person('Eko','Khannedy');
const budi = new Person('budi','nugraha')
console.log(eko);
console.log(budi);

// eko.SayBye = function (){ // mendefinisikan ulang yang ada di prototype
//     console.info('sampai jumpa')
// }

eko.sayBye() 
eko.run()

budi.sayBye()
budi.run()