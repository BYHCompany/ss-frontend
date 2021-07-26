import { LanguageType, UiTheme } from '../../../GlobalTypes/profileTypes';

export type LoginData = {
  email: string;
  pass: string;
  rememberMe?: boolean;
};

export type Role = {
  id: number;
  value: string;
  description: string;
};

export type LoginUser = {
  id: number;
  email: string;
  confirmed: boolean;
  firstName: string;
  lastName: string;
  avatarURL: string;
  impSys: boolean;
  lang: LanguageType;
  uiTheme: UiTheme;
};

export type LoginResponseData = {
  accessToken: string;
  refreshToken: string;
  user: LoginUser;
};
