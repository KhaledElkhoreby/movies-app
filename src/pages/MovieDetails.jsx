import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import axiosInstance from '../data/axiosConfig';
import { Badge } from 'react-daisyui';
import { RadialProgress } from 'react-daisyui';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const rate = movie?.vote_average * 10;
  let rateColor = '';
  console.log(rate);

  if (rate > 70) rateColor = 'text-green-600';
  else rateColor = 'text-yellow-500';

  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get(`/movie/${id}`);
      console.log(data.backdrop_path);
      setMovie(data);
    })();
  }, [id]);

  return (
    <>
      <div className="container z-10">
        {movie ? (
          <div className="text-shadow-xl">
            <img
              className="-z-10 blur-md brightness-[65%] w-full h-full fixed top-0 bottom-0 left-0 right-0"
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt=""
            />
            <div className="flex flex-wrap gap-4 justify-start ">
              <figure className="flex-grow shrink-0 basis-[200px] max-w-md max-h-[80vh]">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = './images/Movie_Placeholder.jpg';
                  }}
                  alt={movie?.title}
                  className="rounded-t-lg w-full h-full object-contain transition-transform ease-out duration-200 hover:scale-[1.030] cursor-pointer"
                />
              </figure>
              <div className="flex-grow shrink-0 basis-[300px] justify-self-stretch flex flex-col p-4 text-white gap-y-4">
                <h1 className="text-3xl font-bold ">
                  {movie?.original_title}
                  {'  '}
                  <Badge
                    size="lg"
                    className="text-2xl py-4 px-4 text-slate-200 font-semibold"
                    variant="outline"
                  >
                    {new Date(Date(movie?.release_date)).getFullYear()}
                  </Badge>
                </h1>
                <p>
                  <span>
                    {new Date(Date(movie?.release_date)).toLocaleDateString()}
                  </span>{' '}
                  <span>
                    ({movie?.production_companies[1]?.origin_country})
                  </span>
                  {' • '}
                  <span>{movie?.genres.map((el) => el.name).join(', ')}</span>
                </p>
                <RadialProgress
                  className={`bg-black ${rateColor} font-bold border-4 border-black shadow-white shadow-sm`}
                  value={rate}
                  size={'3.25rem'}
                >
                  <span className="text-white">{rate}%</span>
                </RadialProgress>
                <h1 className="italic text-slate-200 text-lg">
                  {movie?.tagline}
                </h1>
                <h1 className="text-2xl font-bold">Overview</h1>
                <p className="max-w-md">{movie?.overview}</p>
              </div>
            </div>
          </div>
        ) : (
          <HashLoader
            color="#d1255b"
            loading
            size={70}
            speedMultiplier={2}
            className="mx-auto mt-5 "
          />
        )}
      </div>
    </>
  );
}
