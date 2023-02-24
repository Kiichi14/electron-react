import { AnimeType } from 'renderer/types/AnimeType';
import { AxiosError, AxiosResponse } from 'axios';
import { ApiErrorType } from 'renderer/types/ApiType';
import api from '../api';

const parseAnimeHelper = (
  response: AxiosResponse<{ data: AnimeType }>
): AnimeType => {
  return response.data.data;
};

const fetchAnimeById = (id: number): Promise<AnimeType> => {
  return api
    .get<{ data: AnimeType }>(`/anime/${id}`)
    .then(parseAnimeHelper)
    .catch((err) => {
      const error: AxiosError<ApiErrorType> = err;
      throw new Error(error.response?.data.message);
    });
};
export default { fetchAnimeById };
