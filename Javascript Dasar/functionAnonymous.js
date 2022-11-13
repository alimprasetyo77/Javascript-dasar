const say = function(name){
    document.writeln(`<p>hello ${name}</p>`)
}

say('eko')
say('budi')

function giveMeName(callback) {
    callback('eko')
}
giveMeName(say)

giveMeName(function(name){
    document.writeln(`<p>hei ${name}</p>`)
});