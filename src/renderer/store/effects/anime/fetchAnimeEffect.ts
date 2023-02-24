import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAnime from 'renderer/services/anime/animeService';
import { AnimeType } from 'renderer/types/AnimeType';
/**
 * ## Async Thunk Action to fetch anime by id
 * @description Cal this async thunk action to fetch all anime detail from API
 * @param {{ id: number }} payload Data to dispatch to actions
 * @return {{ info: AnimeType }}
 * @example dispatch(fetchAnimeById{ id: 123 }));
 */
export const fetchAnimeById = createAsyncThunk<
  { info: AnimeType }, // Payload que va renvoyer cette action lors qu'elle est réussie
  { id: number }, // Parametre que va attendre mon action async dans mon dispatch
  { rejectValue: { error: string } }
>('anime/fetchAnimeById', async (params, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  const { id } = params;
  try {
    const anime = await fetchAnime.fetchAnimeById(id);

    // console.log('MIDDLEWARE #1', params, anime);
    return fulfillWithValue({ info: anime });
  } catch (error) {
    return rejectWithValue({
      error: error instanceof Error ? error.message : 'error',
    });
  }
});

export default fetchAnimeById;
