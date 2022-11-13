const person = {    // membuat function di dalam object || object method
    name : 'budi',
    sayHello : function(name){
    alert(`hello ${name}`)
    }
};

person.sayHello('alim');

// const person = {    // memasukkan method ke dalam object 
//     name : 'budi'
// }

// person.sayHello = function(name){
//     alert(`hello ${name}`);
// }

// person.sayHello('eko');