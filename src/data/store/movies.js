import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const params = {
  api_key: process.env.REACT_APP_API_KEY,
};

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => ({
        url: `movie/popular`,
        params,
      }),
    }),
    getMovieById: builder.query({
      query: (id) => ({
        url: `movie/${id}`,
        params,
      }),
    }),
    searchForMovies: builder.query({
      query: (search) => ({
        url: `search/movie?query=${search.query}&page=${search.currentPage}`,
        params,
      }),
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetMovieByIdQuery,
  useSearchForMoviesQuery,
} = moviesApi;
