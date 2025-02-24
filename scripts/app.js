const movieTitle = document.querySelector('.movie-title')
const relaseDate = document.querySelector('.release-date')
const moviGenres = document.querySelector('.genres')
const movieDuration = document.querySelector('.movie-duration')
const moviePoster = document.querySelector('.movie-poster-container img')
const movieQuote = document.querySelector('.movie-info-quote') 
const movieOverview = document.querySelector('.movie-info-overview')
const footerYear = document.querySelector('.year')

window.onload = () => {
    let url = 'https://api.themoviedb.org/3/movie/603?api_key=115f690319e7033ad83716129630f553';
    
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        movieTitle.textContent = data.title;

        let date = new Date(data.release_date);
        relaseDate.textContent = `${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;
        movieDuration.textContent = `${data.runtime} minutes`;
        movieQuote.textContent = data.tagline;
        movieOverview.textContent = data.overview;

        let posterUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`;
        moviePoster.src = posterUrl;
        moviePoster.alt = `${data.title} poster`;

        let genresToDisplay = '';

        data.genres.forEach(genre => {
            genresToDisplay = genresToDisplay + `${genre.name}, `;
        });

        let genresUpdated = genresToDisplay.slice(0, -2) + '.';

        moviGenres.textContent = genresUpdated;
        let currentYear = new Date().getFullYear();
        footerYear.textContent = currentYear;
    })

}


//select movie poster original image
//let moviePoster = document.querySelector('.movie-poster');
//select modal window layer
let modal = document.querySelector('#myModal');
//select close button
let closeBtn = document.querySelector('.closeBtn');
//select modal window image
let modalImage = document.querySelector('.movie-poster-modal');
 

moviePoster.addEventListener('click', ()=> {
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;
});

closeBtn.addEventListener('click', () =>  {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
})