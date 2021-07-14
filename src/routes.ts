import { Profile, Settings } from './Pages/Profile';
import { AdvertPage } from './Pages/AdvertPage';
import { MainPage } from './Pages/MainPage';
import { About, Email, SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
import { AddAdvert, SuccessPage } from './Pages/AddAdvert';
export interface Route {
  path: string;
  Component: any;
  name: string;
  exact?: boolean;
}

export const routes = [
  {
    path: '/profile/settings',
    Component: Settings,
    name: 'Profile settings',
  } as Route,
  {
    path: '/profile',
    Component: Profile,
    name: 'Profile',
  } as Route,
  {
    path: '/advert',
    Component: AdvertPage,
    name: 'AdvertPage',
  } as Route,

  {
    path: '/addAdvert/success',
    Component: SuccessPage,
    name: 'SuccessPage',
  } as Route,

  {
    path: '/addAdvert',
    Component: AddAdvert,
    name: 'AddAdvert',
  } as Route,

  {
    path: '/',
    Component: MainPage,
    name: 'MainPage',
    exact: true,
  } as Route,
];

export const authRoutes = [
  {
    path: '/signUp/about',
    Component: About,
    name: 'About',
  } as Route,
  {
    path: '/signUp/confirmEmail',
    Component: Email,
    name: 'confirmEmail',
  } as Route,
  {
    path: '/signUp/confirmEmail',
    Component: Email,
    name: 'confirmEmail',
  } as Route,
  {
    path: '/signIn',
    Component: SignIn,
    name: 'SignIn',
  } as Route,
  {
    path: '/signUp',
    Component: SignUp,
    name: 'SignUp',
  } as Route,
];
