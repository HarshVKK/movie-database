import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.movie}    // 'movie' is the field for the title in the API
          rating={movie.rating}  // 'rating' is the field for rating
          poster={movie.image}   // 'image' is the field for the poster
          imdbUrl={movie.imdb_url}  // 'imdb_url' is the field for IMDb link
        />
      ))}
    </div>
  );
};

export default MovieList;
