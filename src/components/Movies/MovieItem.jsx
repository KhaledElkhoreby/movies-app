import { useState } from 'react';
import { RadialProgress } from 'react-daisyui';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';
import { addToFavorite, removeFavorite } from '../../data/store/favorite';

export default function MovieItem({ movie }) {
  const isInFavoritePage = useMatch('favorites');
  const dispatch = useDispatch();
  const [inFavorite, setInFavorite] = useState(isInFavoritePage);
  const rate = movie.vote_average * 10;
  let rateColor = '';

  if (rate > 70) rateColor = 'text-green-600';
  else rateColor = 'text-yellow-500';

  const handlerFavClickIcon = () => {
    if (inFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addToFavorite(movie));
    }
    setInFavorite((prev) => !prev);
    console.log(movie);
  };

  return (
    <li className=" flex flex-col w-80 h-[600px] max-h-[475px] mt-2 card shadow hover:shadow-lg transition-all ease-in-out relative">
      {!inFavorite ? (
        <AiOutlineStar
          className="btn btn-active text-5xl p-0 text-yellow-400 bg-slate-800 rounded-full absolute top-4 right-3 z-10 hover:text-yellow-300 cursor-pointer"
          onClick={handlerFavClickIcon}
        />
      ) : (
        <AiFillStar
          className="btn btn-active text-5xl p-0 text-yellow-400 bg-slate-800 rounded-full absolute top-4 right-3 z-10 hover:text-yellow-300 cursor-pointer"
          onClick={handlerFavClickIcon}
        />
      )}
      <figure className="h-3/4">
        <Link to={`/${movie.id}`} className="w-full h-full">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = './images/Movie_Placeholder.jpg';
            }}
            alt={movie.title}
            className="rounded-t-lg w-full h-full object-fill transition-transform ease-out duration-200 hover:scale-[1.030] cursor-pointer"
          />
        </Link>
      </figure>
      <div className="bg-gray-900 text-white p-4 rounded-b-lg h-1/4 relative">
        <Link to={`/${movie.id}`}>
          <h1 className="text-lg font-semibold hover:text-primary-content transition-all ease-in-out">
            {movie.title}
          </h1>
        </Link>
        <h2 className="text-sm text-slate-300">{movie.release_date}</h2>
        <RadialProgress
          className={`bg-black ${rateColor} font-bold border-4 border-black absolute top-[-2.85rem] left-4 shadow-white shadow-sm`}
          value={rate}
          size={'3.25rem'}
        >
          <span className="text-white">{rate}%</span>
        </RadialProgress>
      </div>
    </li>
  );
}
