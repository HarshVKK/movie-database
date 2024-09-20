import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        
        // Set the fetched movie data into state
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>Movie Database</h1>
      {loading ? <p>Loading movies...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default App;
