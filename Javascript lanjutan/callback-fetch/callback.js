//Synchronous callback

// function halo(nama) {
//     alert(`hallo ${nama}`)   
// }

function tampilkanPesan(callback){
    const nama = prompt('masukkan nama : ');
    callback(nama)
}
tampilkanPesan( nama => { alert(`hallo ${nama}`) } /* <- arrow function */ ) 
// tampilkanPesan(halo);    

 

