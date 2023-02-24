import type { PayloadAction } from '@reduxjs/toolkit';
import StatusType from '../../../types/Status';
import {
  AnimesState,
  AnimeType,
  nullAnimeType,
} from '../../../types/AnimeType';

type fetchAnimeSuccessActionsType = PayloadAction<{
  info: AnimeType;
}>;

export const fetchAnimeStartCase = (state: AnimesState) => {
  console.log('STATUT LOADING');
  state.status = StatusType.LOADING; // we change status to `loading`
  state.error = ''; // and clear all the previous errors:
};

export const fetchAnimeSuccessCase = (
  state: AnimesState,
  action: fetchAnimeSuccessActionsType
) => {
  const { info } = action.payload;
  console.log('Status SUCCESS', info);
  state.info = info;
  state.status = StatusType.SUCCESS;
  state.error = '';
};

export const fetchAnimeFailureCase = (
  state: AnimesState,
  action: PayloadAction<{ error: string } | undefined>
) => {
  console.log('CASE > FAILURE', action.payload);
  state.error = action.payload ? action.payload.error : 'error'; // We store error message
  state.status = StatusType.FAILURE; // and change `status` to `failure` again.
  state.info = nullAnimeType;
};
