import React from 'react';
import MovieItem from './MovieItem';

export default function MoviesList({ movies }) {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-10 pb-[200px]">
      {movies?.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}
