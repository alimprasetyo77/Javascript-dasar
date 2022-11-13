// let ditepati = true;
// const janji1 = new Promise((resolve,reject) => {
//     if (ditepati) {
//         resolve('janji di tepati')
//     }else {
//         reject('janji tidak di tepati')
//     }
// })

// janji1
//     .then( response => console.log(`OK : ${response}`) ) // then = resolve , resolve ditangkap oleh then
//     .catch( response => console.log(`OK : ${response}`) ) // catch = reject , reject ditangkap oleh catch
                                                            
let ditepati = true ; 
janji2 = new Promise (( resolve, reject ) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('janji di tepati setelah menunggu beberapa detik')
        }, 2000);
    }else{
        setTimeout(() => {
            reject('janji tidak di tepati setelah menunggu beberapa waktu')
        }, 2000)
    }
})


console.log("mulai")
// console.log(janji2.then(() => console.log(janji2)))
janji2
    .finally(() => console.log('selesai menunggu'))
    .then(response => console.log(`OK : ${response}`))
    .catch(response => console.log(`NOT OK: ${response}`))
console.log("selesai")



const film = new Promise( (resolve,reject) => {
    setTimeout(() => {
        resolve([{
            "judul" : "avengers",
            "sutradara" : "alim" ,
        }])            
    }, 1000);
})

const cuaca = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve([{
        "kota" : "bengkulu" ,
        "kondisi cuaca" : "hujan"
      }])
    }, 1000);
})

Promise.all([film,cuaca]).then( response => {
    const [film,cuaca] = response;
    
    console.log(film);
    console.log(cuaca);

}
);


