
const movies = require("./movies");
const exampleMovies = require("./movies");

//Get All Movies//
function getAllMovieTitles(movies) {
  let movieTitles = [];
  for (let i = 0; i < movies.length; i++) {
    movieTitles.push(movies[i].title);
  }
  return movieTitles;
}

// Movie with Highest Metascore //
function getHighestMetascore(movies) {
  let highestScore = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].metascore > highestScore) {
      highestScore = movies[i].metascore;
    }
  }
  return Number(highestScore);
}

// Average IMDB of Movies //
function getAverageIMDBRating(moviesInput) {
  let rating = 0;
  if (moviesInput.length > 0) {
    let long = moviesInput.length;
    for (let i = 0; i < long; i++) {
      rating = rating + Number(moviesInput[i].imdbRating);
      averageRating = Number((rating / long).toFixed(2));
    }
  } else {
    averageRating = 0;
  }

  return averageRating;
}

// Counting Amount of Movies by Rating //
function countByRating(moviesInput) {
  let ratingCountObj = {};
  if (moviesInput.length > 0) {
    let g = 0;
    let pG = 0;
    let pGthirteen = 0;
    for (let i = 0; i < moviesInput.length; i++) {
      if (moviesInput[i].rated === "G") {
        g = g + 1;
        ratingCountObj["G"] = g;
      }
      if (moviesInput[i].rated === "PG") {
        pG = pG + 1;
        ratingCountObj["PG"] = pG;
      }
      if (moviesInput[i].rated === "PG-13") {
        pGthirteen = pGthirteen + 1;
        ratingCountObj["PG-13"] = pGthirteen;
      }
    }
  } else {
    ratingCountObj = {};
  }
  return ratingCountObj;
}

// Finding Movie Info by ID# //
function findById(moviesInput, idN) {
  if (moviesInput.length > 0) {
    for (let i = 0; i < moviesInput.length; i++) {
      let movie = moviesInput[i];
      if (movie.imdbID.includes(idN)) {
        return movie;
      }
    }
  }
  return null;
}

//Finding Movie Info by Genre Match //
function filterByGenre(moviesInput, genreRequest) {
  let movieMatches = [];
  if (moviesInput.length > 0) {
    let query =
      genreRequest.charAt(0).toUpperCase() +
      genreRequest.slice(1).toLowerCase();
    for (let i = 0; i < moviesInput.length; i++) {
      let movie = moviesInput[i];
      if (movie.genre.includes(query)) {
        movieMatches.push(movie);
      }
    }
  }
  return movieMatches;
}

// Finding Info of Movies Released Before Give Year Via Release Date Year //
function getAllMoviesReleasedAtOrBeforeYear(moviesInput, year) {
  let movieMatches = [];
  if (moviesInput.length > 0) {
    for (let i = 0; i < moviesInput.length; i++) {
      let movie = moviesInput[i];
      date = movie.released.split(" ");
      movieYear = date[2];
      if (movieYear <= year) {
        movieMatches.push(movie);
      }
    }
  }
  return movieMatches;
}

// Getting the Movie Title with the Highest Box Office Number //
function getBiggestBoxOfficeMovie(moviesInput) {
  let movieMatches = [null];
  let highest = 0;
  if (moviesInput.length > 0) {
    for (let i = 0; i < moviesInput.length; i++) {
      let movie = moviesInput[i];
      sales = movie.boxOffice.split("$");
      salesNum = parseInt(sales[1].replace(/,/g, ""));
      if (salesNum > highest) {
        movieMatches[0] = movie.title;
        highest = salesNum;
      }
    }
  }
  return movieMatches[0];
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
