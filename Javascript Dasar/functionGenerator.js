function* createNames(){
    yield "alim";
    yield "prasetyo";
    yield "putra";
    yield "sinambela";
}
const names = createNames()
for (const name of names) {
    console.info(name);
}

function* buatGanjil(value){
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            yield i;
        }
    }
}

const numbers = buatGanjil(100);
// for (const number of numbers) { // eksekusi semuanya sampai 100 
//     console.info(number);
// }
console.info(numbers.next().value); // exsekusi satu-persatu seperlunya
console.info(numbers.next().value);
console.info(numbers.next().value);
console.info(numbers.next().value);
console.info(numbers.next().value);
