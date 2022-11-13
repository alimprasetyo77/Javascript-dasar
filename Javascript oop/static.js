class mathUtil{
    static name = 'javascript dasar';
    static sum(...numbers) {
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

const result = mathUtil.sum(1,2,3,4,5,) // cara mengakses static method
console.info(result);
console.info(mathUtil.name) // cara mengakses properti static