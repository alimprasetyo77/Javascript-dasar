const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf Baru');
pBaru.appendChild(teksBaru); // menambahkan teks ke dalam element p 
// appendChild === simpan ke akhir dari element tersebut
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); // menambahkan pBaru ke dalam sectionA

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
// insertBefore === simpan sebelum element apa
ul.insertBefore(liBaru , li2); // menambahkan liBaru sebelum element li2 didalam ul

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2'); // didalam element h2 sudah ada teks hello world 
const teksH2Baru = document.createTextNode('Judul Baru!')

h2Baru.appendChild(teksH2Baru) //memasukkan teks hello world ke dalam element h2

sectionB.replaceChild(h2Baru,p4) // masukkan h2Baru ke dalam p4, p4 === element p di dalam section a

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor =' lightgreen';