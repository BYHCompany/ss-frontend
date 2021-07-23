import { Tag } from '../Components/Tags/Tags/Tags';
import { LoadingState } from '../Store/commonType';
import { AdvertWithoutCar, SmallAdvert } from './advertTypes';

export type ProfileType = 'private' | 'dealer';
export type ProfileSex = 'male' | 'female' | string;
export type UiTheme = 'light' | 'dark';
export type LanguageType = 'en' | 'lv' | 'ru';
// type RolesValues = 'USER' | 'ADMIN';

// type Role = {
//   id: number;
//   value: RolesValues;
//   description: string;
// };

//Profile fields types
export type ProfileRequiredInfo = {
  _status: LoadingState;
  id: string | null;
  type: ProfileType | null;
  confirmed: boolean;
  banned: boolean;
};

export type ProfileMainInfo = {
  _status: LoadingState;
  avatarURL: string | null;
  firstName: string | null;
  lastName: string | null;
};

export type ProfileSettings = {
  _status: LoadingState;
  uiTheme: UiTheme;
  lang: LanguageType;
  impSys: boolean;
};

export type ProfileAdditionalInfo = {
  _status: LoadingState;
  email: string | null;
  phone: string | null;
  sex: ProfileSex | null;
  about: string | null;
  location: string | null;
  bd: string | null;
  country: string | null;
};

export type ProfileSituationalInfo = {
  _status: LoadingState;
  confirmHash: string | null;
  banReason: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

//Profile
export type Profile = {
  required: ProfileRequiredInfo;
  main: ProfileMainInfo;
  settings: ProfileSettings;
  additional: ProfileAdditionalInfo;
  situational: ProfileSituationalInfo;
  favorite: Tag[] | null;
  adverts: {
    _status: LoadingState;
    items: SmallAdvert[] | null;
  };
};

export type UnformattedFullProfile = ProfileRequiredInfo &
  ProfileMainInfo &
  ProfileSettings &
  ProfileAdditionalInfo &
  ProfileSituationalInfo & { favorite: Tag[]; adverts: AdvertWithoutCar[] };
