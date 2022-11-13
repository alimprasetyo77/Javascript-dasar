class mathUtil{
    static sum(...values){
        if (values.length === 0) {
            throw new Error ('total parameter harus lebih dari 0')
        }
        let total = 0;
        for (const value of values) {
            total += value;
        }
        return total;

    }
}


try {
    console.info(mathUtil.sum())
    console.info('eko')
} catch (error) {
    console.info(`terjadi error : ${error.message} `)
}finally{
    console.info('berhenti')
}

class Counter {
    #counter = 1 ;
    next() {
        try {
            return this.#counter;
        } finally {
            this.#counter++;
        }
    }

}
const countter = new Counter();
console.info(countter.next())
console.info(countter.next())
console.info(countter.next())