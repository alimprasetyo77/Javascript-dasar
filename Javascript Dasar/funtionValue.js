function sayHello(name) {
    document.writeln(`<p>hello ${name}</p>`);
}
sayHello("budi")
let say = sayHello;
say("alim")

function giveMeName(callback) {
    callback('eko') // = sayHello("eko")
}
giveMeName(sayHello) 
giveMeName(say)
