import { RootState } from '../../store';

export const selectAnimeStatus = (state: RootState) => state.animes;
export const selectAnimeInfo = (state: RootState) => state.animes.info;
export const selectCharacterInfo = (state: RootState) => state.character;

export default {
  selectAnimeStatus,
  selectAnimeInfo,
  selectCharacterInfo,
};
