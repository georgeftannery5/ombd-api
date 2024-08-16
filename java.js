// https://www.omdbapi.com/?i=tt3896198&apikey=d7dc8cb0&s=star
// http://img.omdbapi.com/?apikey=[d7dc8cb0]&

const moviesListEl = document.querySelector('.movie-list');

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=d7dc8cb0&s=star");
    const moviesData = await movies.json();
    moviesListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("");
}


main(); 

function movieHTML(movie) {
    return `<div class="movie-card">
                    <div class="movie-card__container">
                            <h3>${movie.title}</h3>
                            <p><b>Year</b>${movie.year}</p>
                            <p><b>imdbID</b>${movie.imdbID}}</p>
                            <p><b>Type</b>${movie.type}</p>
                            <p><b>Poster</b>${movie.poster}</p>
                    </div>
                </div>`;
}