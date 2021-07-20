import { Tag } from '../Components/Tags/Tags/Tags';
import { AdvertWithoutCar } from './advertTypes';

type ProfileType = 'private' | 'dealer';
type ProfileSex = 'male' | 'female' | string;
type ProfileUiTheme = 'light' | 'dark';
type LanguageType = 'en' | 'lv' | 'ru';
export type Profile = {
  id: string;
  type: ProfileType;
  firstName: string;
  lastName: string;
  sex: ProfileSex;
  about: string;
  location: string;
  pass1: string;
  pass2: string;
  bd: string;
  country: string;
  confirmed: boolean;
  phone: string;
  avatarUrl: string;
  favorite: Tag[];
  uiTheme: ProfileUiTheme;
  impSys: boolean;
  lang: LanguageType;
  adverts: AdvertWithoutCar[];
};
