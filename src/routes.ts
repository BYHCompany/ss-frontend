import { Profile } from './Pages';
import { AdvertPage } from './Pages/AdvertPage';
import { MainPage } from './Pages/MainPage';
import { About, Email, SignUp } from './Pages/SignUp';

interface Route {
  path: string;
  component: any;
  name: string;
  exact?: boolean;
}
import { SignIn } from './Pages/SignIn';

export const routes = [
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
  { path: '/signUp/confirmEmail', component: Email, name: 'confirmEmail' },
  { path: '/signIn', component: SignIn, name: 'SignIn' },
  {
    path: '/signUp',
    component: SignUp,
    name: 'SignUp',
  } as Route,
];
