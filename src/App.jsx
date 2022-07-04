import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Movies from './pages/Movies';
import React, { Suspense, useContext } from 'react';
import Search from './pages/Search';
import { HashLoader } from 'react-spinners';

const Favorites = React.lazy(() => import('./pages/Favorites'));

const MovieDetails = React.lazy(() => import('./pages/MovieDetails'));

function App() {
  return (
    <>
      <Navbar />
      <div className="my-20">
        <Routes>
          <Route path="/">
            <Route index element={<Movies />} />
            <Route
              path="favorites"
              element={
                <Suspense
                  fallback={
                    <HashLoader
                      color="#d1255b"
                      loading
                      size={70}
                      speedMultiplier={2}
                      className="mx-auto mt-5 "
                    />
                  }
                >
                  <Favorites />
                </Suspense>
              }
            />
            <Route path="search" element={<Search />} />
            <Route
              path="/:id"
              element={
                <Suspense
                  fallback={
                    <HashLoader
                      color="#d1255b"
                      loading
                      size={70}
                      speedMultiplier={2}
                      className="mx-auto mt-5 "
                    />
                  }
                >
                  <MovieDetails />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
