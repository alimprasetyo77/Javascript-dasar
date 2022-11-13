// MEMBUAT GAME SUWIT JAWA
function getPilihanKomputer (){
    const comp = Math.random();
    if (comp < 0.34) { return 'jempol'}
    if (comp >= 0.34 && comp < 0.67) { return 'telunjuk'}
    return 'kelingking'
}
function getHasil(comp,player) {
    if (player == comp) return 'seri';
    if (player == 'jempol') return (comp == 'telunjuk') ? 'menang' : 'kalah!';
    if (player == 'telunjuk') return (comp == 'jempol') ? 'kalah' : 'menang!';
    if (player == 'kelingking') return (comp == 'telunjuk') ? 'kalah' : 'menang!';
}

function putar() {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar =  ['jempol','telunjuk','kelingking'];
    let i = 0 ;
    let waktu = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktu > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src',`img/${gambar[i++]}.png`)
        if (i === gambar.length) i = 0;
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach( (pil) => {
    pil.addEventListener('click',() => {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer,pilihanPlayer);
    
    putar()
    setTimeout(() => {
        const gambarKomputer = document.querySelector('.img-komputer')
        gambarKomputer.setAttribute(`src`,`img/${pilihanKomputer}.png`)
        
        const info = document.querySelector('.info');
        info.innerHTML = hasil
    }, 1000);
    });
});




// const pJempol = document.querySelector('.jempol');
// pJempol.addEventListener('click',() => {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pJempol.className;
//     const hasil = getHasil(pilihanKomputer,pilihanPlayer);
    
//     const gambarKomputer = document.querySelector('.img-komputer')
//     gambarKomputer.setAttribute(`src`,`img/${pilihanKomputer}.png`)

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil
// })


// const pTelunjuk = document.querySelector('.telunjuk');
// pTelunjuk.addEventListener('click',() => {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pTelunjuk.className;
//     const hasil = getHasil(pilihanKomputer,pilihanPlayer);
    
//     const gambarKomputer = document.querySelector('.img-komputer')
//     gambarKomputer.setAttribute(`src`,`img/${pilihanKomputer}.png`)

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil
// })


// const pKelingking = document.querySelector('.kelingking');
// pKelingking.addEventListener('click',() => {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pKelingking.className;
//     const hasil = getHasil(pilihanKomputer,pilihanPlayer);
    
//     const gambarKomputer = document.querySelector('.img-komputer')
//     gambarKomputer.setAttribute(`src`,`img/${pilihanKomputer}.png`)

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil
// })

