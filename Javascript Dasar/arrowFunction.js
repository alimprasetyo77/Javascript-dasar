const sayHello = name => console.info(name); // arrow function untuk satu parameter
sayHello('toriq')

const sum = (first,second) => first + second; // arrow function untuk lebih dari satuu parameter
console.info(sum(10,10));

function giveMeName(callback) { // arrow function sebagai parameter
    callback("Alim");
}
giveMeName( name => console.info (`hello ${name}`)); //parameter langsung return && value nya dari function giveMeName