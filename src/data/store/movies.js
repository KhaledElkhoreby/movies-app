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
      query: (language) => ({
        url: `movie/popular?language=${language}`,
        params,
      }),
    }),
    getMovieById: builder.query({
      query: (q) => ({
        url: `movie/${q.id}?language=${q.language}`,
        params,
      }),
    }),
    searchForMovies: builder.query({
      query: (search) => ({
        url: `search/movie?query=${search.query}&page=${search.currentPage}&language=${search.language}`,
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
