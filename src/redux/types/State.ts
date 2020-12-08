import {User} from './User';

export type State = {
  user: User;
  accesstoken: string;
  isLogged: boolean;
  expiresIn: number;
};
