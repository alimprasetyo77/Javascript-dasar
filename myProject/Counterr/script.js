const valueDisplay = document.querySelector('.value')
let value = 0;

function decrement() {
    value--;
    valueDisplay.innerText = value;
    if(value <= -10 ) {
        value = 0;
    }
}
function increment() {
    value++;
    valueDisplay.innerText = value;
    if(value >= 10 ) {
        value = 0;
    }

}
const tambah = document.querySelector('.tambah')
const kurang = document.querySelector('.kurang')

// tambah.addEventListener('click' ,() => {
//     increment();
// })
// kurang.addEventListener('click' ,() => {
//     decrement();
// })

const container = document.querySelector('.container');

container.addEventListener('click',(events) => {
    if (events.target.className == 'kurang') {
        decrement()
    }
    if(events.target.className == 'tambah') {
        increment()
    }
        
})