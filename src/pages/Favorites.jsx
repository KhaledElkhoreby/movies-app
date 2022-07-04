import { useSelector } from 'react-redux';
import MoviesList from '../components/Movies/MoviesList';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log({ favorites });
  return (
    <div className="container">
      <MoviesList movies={favorites} />
    </div>
  );
}
