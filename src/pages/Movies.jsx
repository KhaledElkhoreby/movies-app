import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

import MoviesList from '../components/Movies/MoviesList';
import axiosInstance from '../data/axiosConfig';

export default function Movies() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get('/movie/popular');
      console.log(data);
      SetMovies(data.results);
    })();
  }, []);
  return (
    <div className="container">
      {movies.length === 0 ? (
        <HashLoader
          color="#d1255b"
          loading
          size={70}
          speedMultiplier={2}
          className="mx-auto mt-5 "
        />
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
}
