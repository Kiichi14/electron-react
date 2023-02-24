import { ImageFormatType, ImageType } from './ImageType';
import Status from './Status';

export type CharacterType = {
  malID: number;
  url: string;
  images: Record<ImageFormatType, ImageType> | null;
  name: string;
  nameKanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
};

export const nullCharacterType: CharacterType = {
  malID: NaN,
  url: '',
  images: null,
  name: '',
  nameKanji: '',
  nicknames: [],
  favorites: NaN,
  about: '',
};

export type CharacterState = {
  info: CharacterType;
  status: Status;
  error: string;
};
