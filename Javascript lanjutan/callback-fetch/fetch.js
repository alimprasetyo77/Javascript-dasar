// /* FETCH */
// const searchButton = document.querySelector('.search-button')
// searchButton.addEventListener('click', function ()  {
//     const inputKeyword = document.querySelector('.input-keyword')
//     fetch(`http://www.omdbapi.com/?apikey=f54dfbf8&s=` + inputKeyword.value).then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCards(m));
//             const movieContainer = document.querySelector('.container-movies')
//             movieContainer.innerHTML = cards;



//             // ketika tombol detail di klik 
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click', function(){ 
//                     const imdbid = this.dataset.imdbid ;
//                     fetch(`http://www.omdbapi.com/?apikey=f54dfbf8&i=${imdbid}`).then(response => response.json())
//                         .then(m => {
//                             const movieDetail = detailCard(m);
//                             const modalBody = document.querySelector('.modal-body')
//                             modalBody.innerHTML  = movieDetail; 
//                         })


//                 })
//             })
//         })
// })


/* Search Movie */
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async () => {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies)
})

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=f54dfbf8&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search)
}

function updateUI(movies){
    let cards = ""
    movies.forEach(m => cards += showCards(m))
    const containerMovies = document.querySelector('.container-movies')
    containerMovies.innerHTML = cards
}


// ketika tombol diklik
document.addEventListener('click', async function (e) {
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid)
        updateUIDetail(movieDetail)
    }

})
function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=f54dfbf8&i=' + imdbid) 
        .then(response => response.json())
        .then(m => m)
}
function updateUIDetail(m){
    const movieDetail = detailCard(m);
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = movieDetail
}







function showCards(m) { 
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"data-bs-target="#moviesDetailModal" data-imdbid="${m.imdbID}" >Show Detail</a>
                    </div>
                </div>
            </div>`                  
}

function detailCard(m) {
    return  ` <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" alt="" class="img-fluid">
                        <strong>Runtime : ${m.Runtime} </strong> 

                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title}</h4></li>
                        <li class="list-group-item"> <strong>Director : ${m.Director} </strong> </li>
                        <li class="list-group-item"> <strong>Writer : ${m.Writer} </strong>  </li>
                        <li class="list-group-item"> <strong>Actors : ${m.Actors} </strong> </li>
                        <li class="list-group-item"> <strong>Plot : ${m.Plot} </strong> </li>
                        </ul>
                    </div>
                </div>
            </div>`                            
}


