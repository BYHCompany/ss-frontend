import { Profile } from './Pages';
import { AdvertPage } from './Pages/AdvertPage';
import { MainPage } from './Pages/MainPage';
import { About, Email, SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
export interface Route {
  path: string;
  Component: any;
  name: string;
  exact?: boolean;
}

export const routes = [
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
  { path: '/signUp/confirmEmail', Component: Email, name: 'confirmEmail' },
  { path: '/signIn', Component: SignIn, name: 'SignIn' },
  {
    path: '/signUp',
    Component: SignUp,
    name: 'SignUp',
  } as Route,
];
