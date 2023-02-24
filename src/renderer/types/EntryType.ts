import { ImageFormatType, ImageType } from './ImageType';

export type data = {
  malID: number;
  url: string;
  images: Record<ImageFormatType, ImageType> | null;
  title: string;
};
