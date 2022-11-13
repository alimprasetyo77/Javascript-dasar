function isContains (array,searchValue){
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}
const array = [1,2,3,4,5,6,7,8,9,10];
const search = 2;
const result = isContains(array,search);
document.writeln(result);