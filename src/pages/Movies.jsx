import Cookies from 'js-cookie';
import { HashLoader } from 'react-spinners';
import MoviesList from '../components/Movies/MoviesList';
import { useGetPopularMoviesQuery } from '../data/store/movies';

export default function Movies() {
  const currentLanguageCode = Cookies.get('i18next') || 'en';

  const { data, error, isLoading } =
    useGetPopularMoviesQuery(currentLanguageCode);
  const movies = data?.results || [];

  return (
    <div className="container">
      {movies && <MoviesList movies={movies} />}
      {isLoading && (
        <HashLoader
          color="#d1255b"
          loading
          size={70}
          speedMultiplier={2}
          className="mx-auto mt-5"
        />
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
}
