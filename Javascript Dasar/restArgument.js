// rest parameter
function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    document.writeln(`<p>Total ${name} is ${total}</p>`)
}

sum("Jeruk",1,2,3,4,5,6,7,8,9,10);

// spread syntax rest parameter / memasukan array ke dalam rest parameter
const values = [10,10,10,10,10,10];
sum('Durian', ...values);

// argument parameter = rest parameter versi lama
function oldSum() {
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    document.writeln(`<p>total is ${total}</p>`)
}
oldSum(1,1,1,1,1,1,1);