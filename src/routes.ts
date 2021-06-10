import { Profile, Settings } from './Pages/Profile';
import { AdvertPage } from './Pages/AdvertPage';
import { MainPage } from './Pages/MainPage';
import { About, Email, SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
interface Route {
  path: string;
  component: any;
  name: string;
  exact?: boolean;
}

export const routes = [
  {
    path: '/profile/settings',
    component: Settings,
    name: 'Profile settings',
  } as Route,
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
  } as Route,
  {
    path: '/advert',
    component: AdvertPage,
    name: 'AdvertPage',
  } as Route,
  {
    path: '/',
    component: MainPage,
    name: 'MainPage',
    exact: true,
  } as Route,
];

export const authRoutes = [
  {
    path: '/signUp/about',
    component: About,
    name: 'About',
  } as Route,
  {
    path: '/signUp/confirmEmail',
    component: Email,
    name: 'confirmEmail',
  } as Route,
  {
    path: '/signUp/confirmEmail',
    component: Email,
    name: 'confirmEmail',
  } as Route,
  {
    path: '/signIn',
    component: SignIn,
    name: 'SignIn',
  } as Route,
  {
    path: '/signUp',
    component: SignUp,
    name: 'SignUp',
  } as Route,
];
