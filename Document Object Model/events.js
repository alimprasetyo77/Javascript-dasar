const p3 = document.querySelector('.p3');

function ubahWarnaP3(){
    p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
function ubahwarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}
p2.onclick = ubahwarnaP2;


const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');

    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('item baru !');
    liBaru.appendChild(textLiBaru);

    ul.appendChild(liBaru);

})

