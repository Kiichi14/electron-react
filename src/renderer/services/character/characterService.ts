import { AxiosError, AxiosResponse } from 'axios';
import { ApiErrorType } from 'renderer/types/ApiType';
import { CharacterType } from 'renderer/types/CharacterType';
import api from '../api';

const parseAnimeHelper = (
  response: AxiosResponse<{ data: CharacterType }>
): CharacterType => {
  return response.data.data;
};

const fetchTopCharacter = (): Promise<CharacterType> => {
  return api
    .get<{ data: CharacterType }>(`top/characters`)
    .then(parseAnimeHelper)
    .catch((err) => {
      const error: AxiosError<ApiErrorType> = err;
      throw new Error(error.response?.data.message);
    });
};
export default { fetchTopCharacter };
