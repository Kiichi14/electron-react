/* eslint-disable no-shadow */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import animesSlice from './slices/anime/animesSlice';
import characterSlice from './slices/character/characterSlice';
import { topAnimeSlice } from './slices/topAnime/topSliceRtk';

// Initialisation du Store Globale
const store = configureStore({
  reducer: {
    animes: animesSlice.reducer,
    character: characterSlice.reducer,
    [topAnimeSlice.reducerPath]: topAnimeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topAnimeSlice.middleware),
});

// Export des types pour retrouver l'etat du state général et le dispatch
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
