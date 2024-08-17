// https://www.omdbapi.com/?i=tt3896198&apikey=d7dc8cb0&s=star
// http://img.omdbapi.com/?apikey=[d7dc8cb0]&

function openMenu(){
    document.body.classList += "menu--open"
}

function closeMenu(){
    document.body.classList.remove('menu--open')
}

const moviesListEl = document.querySelector('.movie-list');

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=d7dc8cb0&s=star");
    const moviesData = await movies.json();
    moviesListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
}

main();

function movieHTML(movie) {
    return `<div class="movie-card">
                    <div class="movie-card__container">
                            <h3>${movie.Title}</h3>
                            <p><b>Year:</b>${movie.Year}</p>
                            <p><b>imdbID:</b>${movie.imdbID}}</p>
                            <p><b>Type:</b>${movie.Type}</p>
                            <p><b>Poster</b>${movie.Poster}</p>
                    </div>
                </div>`;
}

function movieHTML(movie) {
    return `<div class="movie"">
            <a class="movie-card__container"
                ><img
                class="movie__poster"
                src="${movie.Poster}"
                alt=""
            ></a>
            <h3><b>${movie.Title}</b></h3>
            <p>${movie.Year}</p>
        </div>`;
}
