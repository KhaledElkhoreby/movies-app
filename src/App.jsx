import React, { Suspense, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { SettingContext } from './data/store/context/SettingProvieder';
import { languages } from './i18next';
import Movies from './pages/Movies';
import Search from './pages/Search';

const Favorites = React.lazy(() => import('./pages/Favorites'));

const MovieDetails = React.lazy(() => import('./pages/MovieDetails'));

function App() {
  const { lang } = useContext(SettingContext);
  const currentLanguage = languages.find((el) => el.code === lang);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('app_title');
  }, [currentLanguage, t]);
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
