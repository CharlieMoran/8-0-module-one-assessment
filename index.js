/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieTitles = [];
  for (let i = 0; i < movies.length; i++){
    movieTitles.push(movies[i].title);
  }
  return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highestScore = 0;
  for (let i = 0; i < movies.length; i++){
    if (movies[i].metascore > highestScore){
      highestScore = movies[i].metascore;
    }
  }
  return Number(highestScore);
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. 
 * If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(moviesInput) {
  let rating = 0;
  if (moviesInput.length > 0){
    let long = moviesInput.length;
    for (let i = 0; i < long; i++){
      rating = rating + Number(moviesInput[i].imdbRating);
      averageRating = Number((rating/long).toFixed(2));
  } 
} else {
  averageRating = 0;
}
  
  return averageRating;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and 
 * the values are the number of movies in the array with that rating. 
 * If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and 
 * the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(moviesInput) {
let ratingCountObj = {};
if (moviesInput.length > 0){
  let g = 0;
  let pG = 0;
  let pGthirteen = 0;
for (let i = 0; i < moviesInput.length; i++){
  if (moviesInput[i].rated === "G"){
    g = g + 1;
    ratingCountObj['G'] = g;
  }
  if (moviesInput[i].rated === "PG"){
    pG = pG + 1;
    ratingCountObj['PG'] = pG;
  }
  if (moviesInput[i].rated === "PG-13"){
    pGthirteen = pGthirteen + 1;
    ratingCountObj['PG-13'] = pGthirteen;
  }
  
  
} 
} else {
  ratingCountObj = {};
}
return ratingCountObj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. 
 * If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The MOVIE OBJECT at INDEX with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {...
      // title: Toy Story 4,
      //...
      // imdbID: "tt1979376",
      //...
      // poster:
      "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
    };
 */

function findById(moviesInput, idN) {
if (moviesInput.length > 0){
for (let i = 0; i < moviesInput.length; i++){
  let movie = moviesInput[i];
  if (movie.imdbID.includes(idN)){
        return movie;
  }
}
} 
  return null;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of matching MOVIE OBJECTS at INDEX
 *  where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Adventure");
 *  //> [
      { ...
        // movie: Coco
        ...
        genre: "Animation, Action, Adventure",
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(moviesInput, genreRequest) {
let movieMatches = [];
if (moviesInput.length > 0){
  let query = genreRequest.charAt(0).toUpperCase() + genreRequest.slice(1).toLowerCase();
  for (let i = 0; i < moviesInput.length; i++){
    let movie = moviesInput[i];
    if (movie.genre.includes(query)){
          movieMatches.push(movie);
    }
  }
  } 
    return movieMatches;
  }


/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {...
        //released: "24 Jun 1994",
        //...
        // title: "The Lion King",
        // ...
      },
      {...
        //released: "19 Sep 1941",
        //...
        //title: "Fantasia",
        //...
      },
      {...
        //released: "12 Apr 1996",
        //...
        //title: "James and the Giant Peach",
        //...
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(moviesInput, year) {
let movieMatches = [];
if (moviesInput.length > 0){
  for (let i = 0; i < moviesInput.length; i++){
    let movie = moviesInput[i];
    date = movie.released.split(" ")
    movieYear = date[2];
    if (movieYear <= year){
          movieMatches.push(movie);
    }
  }
  } 
    return movieMatches;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(moviesInput) {
  let movieMatches = [null];
  let highest = 0;
  if (moviesInput.length > 0){
    for (let i = 0; i < moviesInput.length; i++){
      let movie = moviesInput[i];
      sales = movie.boxOffice.split("$");
      salesNum = parseInt(sales[1].replace(/,/g,""))
      if (salesNum > highest){
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
