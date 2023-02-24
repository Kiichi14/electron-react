/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'renderer/services/api';
import {
  CharacterState,
  CharacterType,
  nullCharacterType,
} from 'renderer/types/CharacterType';
import StatusType from 'renderer/types/Status';

export const initialState: CharacterState = {
  status: StatusType.START,
  info: nullCharacterType,
  error: '',
};

export const characterSlice = (state = initialState) =>
  createSlice({
    name: 'character',
    initialState: state,
    reducers: {
      // Classic Actions
    },
  });

export const fetchPosts = createAsyncThunk<
  { info: CharacterType[] }, // Payload que va renvoyer cette action lors qu'elle est réussie
  { rejectValue: { error: string } }
>('character/fetchCharacter', async () => {
  const response = await api.get('https://api.jikan.moe/v4/top/characters');
  return response.data;
});

export default {
  reducer: characterSlice().reducer,
  actions: characterSlice().actions,
};
