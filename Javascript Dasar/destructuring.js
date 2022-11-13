// destructuring array
{
    const names = ['alim', 'eko', 'budi' ,'kurniawan'];
    const [firstName, middleName, lastName,...others] = names ;
    console.info(firstName)
    console.info(middleName)
    console.info(lastName)
}

// destructuring object
{
    const person = {
        firstName: 'alim',
        middleName: 'eko',
        addrees: {
            street : 'jalan belum ada',
            city : 'bengkulu',
            country : 'indonesia'
        },
        hobby : 'Game'
    }
    //destructuring object
    // const {firstName,middleName addrees ,...other} = person;

    //destructuring nested object
    const {firstName,middleName,addrees : {street,city,country},...other} = person;

    console.info(firstName)
    console.info(middleName)
    console.info(street)
    console.info(city)
    console.info(country)
    console.info(other.hobby)

}

//destructuring parameter
{
    //cara untuk yang object
    function displayPersonObject({firstName,middleName,lastName}){
        console.info(firstName,middleName,lastName)
    }

    const personObject = {
        firstName: 'alim',
        middleName: 'budi',
        lastName: 'eko'
    }
    displayPersonObject(personObject)

    //cara untuk yang array
    function displayPersonArray([pertama,kedua,ketiga]){
        console.info(pertama + kedua + ketiga)
    }

    const personArray = [10 ,10 ,10];

    displayPersonArray(personArray)

}

//  default value destructuring array
{
    const names = ['alim', 'eko'];
    const [firstName, middleName, lastName = 'prasetyo'] = names ;
    console.info(firstName,middleName,lastName)
   
}
//  default value destructuring object
{
    const person = {
        firstName: 'ath',
        lastName: 'putra'
    }

    let {firstName,middleName = 'thoriq',lastName} = person;
    console.info(firstName,middleName,lastName)
   
}

// destructuring dengan menggunakan nama variabel lain
{
    const person = {
        firstName: 'ath',
        middleName: 'toriq',
        lastName: 'putra'
    }

    const {
        firstName : namaDepan,
        middleName : namaTengah = 'thoriq', //default value
        lastName : namaBelakang,
    } = person;

    console.info(namaDepan,namaTengah,namaBelakang)
}

