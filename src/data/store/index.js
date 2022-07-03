import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorite';

const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});

export default store;
