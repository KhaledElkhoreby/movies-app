import React from 'react';
import MovieItem from './MovieItem';

export default function MoviesList({ movies }) {
  return (
    <ul className="flex flex-wrap justify-center items-center max-h-screen gap-8 my-4  ">
      {movies?.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
