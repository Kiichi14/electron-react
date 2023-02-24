import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RecommandationType } from 'renderer/types/RecommandationTypes';

export const topAnimeSlice = createApi({
  reducerPath: 'topAnime',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jikan.moe/v4/',
  }),
  endpoints: (builder) => ({
    getTopAnime: builder.query<RecommandationType, void>({
      query: () => 'recommendations/anime',
    }),
  }),
});

export const { useGetTopAnimeQuery } = topAnimeSlice;
