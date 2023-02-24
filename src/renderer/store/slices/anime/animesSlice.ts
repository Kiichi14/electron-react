import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import fetchAnimeById from 'renderer/store/effects/anime/fetchAnimeEffect';
import { AnimesState, nullAnimeType } from '../../../types/AnimeType';
import StatusType from '../../../types/Status';
import {
  fetchAnimeStartCase,
  fetchAnimeSuccessCase,
  fetchAnimeFailureCase,
} from '../../actions/anime/fetchAnimeActions';

export const initialState: AnimesState = {
  status: StatusType.START,
  info: nullAnimeType,
  error: '',
};

export const animesSlice = (state = initialState) =>
  createSlice({
    name: 'animes',
    initialState: state,
    reducers: {
      // Classic Actions
    },
    extraReducers: (builder) => {
      builder.addCase(fetchAnimeById.pending, fetchAnimeStartCase);
      builder.addCase(fetchAnimeById.fulfilled, fetchAnimeSuccessCase);
      builder.addCase(fetchAnimeById.rejected, fetchAnimeFailureCase);
    },
  });

export default {
  reducer: animesSlice().reducer,
  actions: animesSlice().actions,
};
