import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import favoriteReducer from './favorite';
import { moviesApi } from './movies';

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    favorites: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
