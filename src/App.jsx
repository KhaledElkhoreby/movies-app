import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/">
            <Route index element={<Movies />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="search" element={<Search />} />
            <Route path="/:id" element={<MovieDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
