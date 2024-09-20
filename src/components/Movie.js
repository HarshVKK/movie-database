import React from 'react';
import './Movie.css';

const Movie = ({ title, rating, poster, imdbUrl }) => {
  return (
    <div className="movie">
      <a href={imdbUrl} target="_blank" rel="noopener noreferrer">
        <img src={poster} alt={title} className="movie-poster" />
      </a>
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Movie;
