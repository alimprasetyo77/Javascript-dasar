// const card = document.querySelector('.card');
// const close = document.querySelector('.close')
// close.addEventListener('click' , () => {
//     // card.style.display = "none"; 
//     card.remove(close);
// })
// DOM TRAVERSAL
// const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click',(event) => {
//         // close[i].parentElement.style.display = 'none'
//         event.target.parentElement.style.display = 'none'
//     })
    
// }

// close.forEach((el) => {
//     el.addEventListener('click',(e) => {
//         e.target.parentElement.style.display = 'none'
//         // e.target.parentElement.remove()
//         e.preventDefault() // mengehentikan aksi default dari sebuah elment yang diklik yaitu <a>
//         e.stopPropagation() // menghentikan event card ketika event close di klik
//     })
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach((card) => {
//     card.addEventListener('click', (e) => {
//         alert('hello world')
//     })
// })

const container = document.querySelector('.container');
container.addEventListener('click',(e) => {
    if( e.target.className == "close" ) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
    if( e.target.className == "card" ){
        alert('hello world');
    }
})







