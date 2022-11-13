const person = {
    firstName : 'Alim',
    lastName : 'prasetyo',
    get  fullname() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullname(value){
        const array = value.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
}
person.fullname = ('thoriq putra');
console.info(person);
person.fullname = ('eko khannedy');
console.info(person);
person.fullname = ('joko asmoro');
console.info(person);
