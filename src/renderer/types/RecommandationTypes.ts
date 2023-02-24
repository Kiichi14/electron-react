import { data } from './EntryType';
import Status from './Status';
import { nullUserType, User } from './UserType';

export type RecommandationType = {
  malID: string;
  entry: data[];
  content: string;
  user: User;
};

export const nullRecommandationType: RecommandationType = {
  malID: '',
  entry: [],
  content: '',
  user: nullUserType,
};

export type RecommandationState = {
  status: Status;
  info: RecommandationType;
  error: string;
};
