// const stop = document.querySelector('.stop');
// let bg = document.querySelector('body');

// const timeOut = setTimeout(() => {
//    bg.style.backgroundColor = 'red';
// }, 2000);

// let interval = setInterval(() => {
//     console.log('+')
// }, 1000);

// stop.addEventListener('click',() => {
//     clearInterval(interval);
//     bg.style.backgroundColor = 'white';
//     console.log('stop')
// })


const tanggalTujuan = new Date('sep 10 ,2022 21:00:00').getTime();
const hitungMundur = setInterval(() => {
    const sekarang = new Date().getTime() ;
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24)) ;
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) ;
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60)) ;
    const detik = Math.floor(selisih % (1000 * 60 ) / 1000) ;

    document.getElementById('teks').innerHTML = (`${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`);

    if (hari <= 0) {
        document.getElementById('teks').innerHTML = (`${jam} Jam ${menit} Menit ${detik} Detik`);
        
    }
    if (jam <= 0) {
        document.getElementById('teks').innerHTML = (`${menit} Menit ${detik} Detik`);
        
    }
    if (menit <= 0) {
        document.getElementById('teks').innerHTML = (`${detik} Detik`);
        
    }
    
    
    if (selisih < 0 ) {
        clearInterval(hitungMundur);
        document.getElementById('teks').innerHTML = ('Waktu Habis!!');

    }

}, 1000);
;