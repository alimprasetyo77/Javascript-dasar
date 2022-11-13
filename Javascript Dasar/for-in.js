
const person = {
    firstName : "Alim",
    middleName : "Prasetyo Putra",
    lastName : "Sinambela"
};

for (const property in person) {
  document.writeln(`<p>${property} : ${person[property]}</p>`);
}

const names = ['alim','prasetyo','putra','sinambela'];
for (const index in names) {
   document.writeln(`<p>${index} - ${names[index]}</p>`);
}
