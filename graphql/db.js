let movies = [
  {
    id: 0,
    name: "Cudy1",
    score: 21
  },
  {
    id: 1,
    name: "Cudy2",
    score: 22
  },
  {
    id: 2,
    name: "Cudy3",
    score: 23
  },
  {
    id: 3,
    name: "Cudy4",
    score: 24
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovie.length) {
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
