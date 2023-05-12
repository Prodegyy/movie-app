let submit = document.querySelector('.search-button');
let search = document.querySelector('.search-bar');
let title = document.querySelector('.movie-title')
let movie_image = document.querySelector('#movie-image');
let movie_rating = document.querySelector('.movie-rating');
let movie_plot = document.querySelector('#movie-plot');
let movie_cast = document.querySelector('#movie-cast');
let movie_rated = document.querySelector('.movie-rated');
let movie_released = document.querySelector('.movie-released');
let movie_runtime = document.querySelector('.movie-runtime');
let movie_categorie = document.querySelector('.movie-categorie');
let movie_information = document.querySelector('.movie-information');
let movie_plot_class = document.querySelector('.movie-plot');
let movie_cast_class = document.querySelector('.movie-cast');
let card = document.querySelector('.card');
let error = document.querySelector('.error');




let apiKey = 'f9f51dd2';
let url = 'http://www.omdbapi.com/?t=';


submit.addEventListener('click', (e) => {
    e.preventDefault();

    let moviename = search.value;
    console.log(moviename);
    getMovieInfos(moviename);

});

async function getMovieInfos(moviename) {
    const response = await fetch(url + moviename + `&apikey=${apiKey}`);
    const data = await response.json();
    console.log(data);

    if (data.Response == 'False') {
        error.innerHTML = data.Error;
        card.style.height = '150px';

        error.style.display = 'block';
        movie_information.style.display = 'none';
        movie_plot_class.style.display = 'none';
        movie_cast_class.style.display = 'none';

} else {
    console.log('Success');

    movie_image.src = data.Poster;
    title.innerHTML = data.Title;
    movie_rating.innerHTML = '<img id="star-icon" src="star-icon.svg">' + data.imdbRating;
    movie_plot.innerHTML = data.Plot;
    movie_cast.innerHTML = data.Actors;
    movie_rated.innerHTML = data.Rated;
    movie_runtime.innerHTML = data.Runtime;
    movie_released.innerHTML = data.Released;
    movie_categorie.innerHTML = `<div class="movie-info2">${data.Genre.split(",").join("</div><div class='movie-info2'>")}`

    movie_information.style.display = 'flex';
    movie_plot_class.style.display = 'block';
    movie_cast_class.style.display = 'block';

    card.style.height = '750px';

    error.style.display = 'none';
    }
}