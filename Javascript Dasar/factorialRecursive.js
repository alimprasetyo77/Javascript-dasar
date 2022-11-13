function factorialRecursive(value){
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}

console.info(factorialRecursive(10));