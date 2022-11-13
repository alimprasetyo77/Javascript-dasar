// JQuery
$('.search-button').on('click' ,function () {
    
    $.ajax({
        url : 'http://www.omdbapi.com/?apikey=f54dfbf8&s=' + $('.input-keyword').val(),
        success : (result) => {
            const movies = result.Search;
            let cards = '';
    
            movies.forEach(m => {
                cards += ` <div class="col-md-4 my-3">
                                <div class="card">
                                    <img src="${m.Poster}" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${m.Title}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"                   data-bs-target="#moviesDetailModal" data-imdbid="${m.imdbID}" >Go somewhere</a>
                                    </div>
                                </div>
                            </div> `
            });
            $('.container-movies').html(cards)
    
            $('.modal-detail-button').on('click', function() {
                $.ajax({
                    url : `http://www.omdbapi.com/?apikey=f54dfbf8&i=` + $(this).data('imdbid'),
                    success : (m) => {
                        const modals = `<div class="container-fluid">
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
    
                        $('.modal-body').html(modals)
                    } ,
                    error : e => { 
                       console.log(e.responseText); 
                    }
                })
               
            })
    
        },
        error : (e) => {
            console.log(e.responseText)
        }
    })
})
