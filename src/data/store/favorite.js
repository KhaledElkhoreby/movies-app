import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  counts: 0,
};

const favouriteSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addToFavorite(state, actions) {
      if (state.favorites.length === 0) {
        state.favorites.push(actions.payload);
      } else {
        const index = state.favorites.findIndex(
          (el) => el.id === actions.payload.id
        );
        if (index < 0) {
          state.favorites.push(actions.payload);
        }
      }
      state.counts++;
    },

    removeFavorite(state, actions) {
      state.favorites = state.favorites.filter(
        (el) => el.id !== actions.payload.id
      );
      state.counts--;
    },
  },
});

export const { addToFavorite, removeFavorite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
