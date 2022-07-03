import React from 'react';
import MovieItem from './MovieItem';

export default function MoviesList({ movies }) {
  return (
    <ul className="flex flex-wrap justify-center items-center max-h-screen gap-10 gap-y-20 my-4 pb-[200px]">
      {movies?.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}
