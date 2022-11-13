const angka = [1,2,3,4,5,6,7,8,9,10]

const angkaFilter = angka.filter(function (a) { return a >= 3})
const saringAngka = angka.filter((a) => a <= 3 )
const mapAngka = angka.map( a => a * 2 )

console.info(angkaFilter)
console.info(saringAngka)
console.info(mapAngka)

// Method Chaining 
const hasil = angka.filter(a => a > 5) // ambil array yang angkanya lebih dari 5
    .map(a => a * 3) // 18 21 24 27 30
    .map(a => a / 2) // 120 : 2
    .reduce((acc,cur) => acc + cur) // jumlahkan

console.log(hasil)