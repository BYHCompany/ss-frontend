import { Profile } from './Pages';
import { AdvertPage } from './Pages/AdvertPage';
import { MainPage } from './Pages/MainPage';
import { SignIn } from './Pages/SignIn/SignIn/SignIn';
import { Email, SignUp } from './Pages/SignUp';

export const routes = [
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
  },
  {
    path: '/advert',
    component: AdvertPage,
    name: 'AdvertPage',
  },
  {
    path: '/',
    component: MainPage,
    name: 'MainPage',
    exact: true,
  },
];

export const authRoutes = [
  { path: '/signUp/confirmEmail', component: Email, name: 'confirmEmail' },
  { path: '/signIn', component: SignIn, name: 'SignIn' },
  {
    path: '/signUp',
    component: SignUp,
    name: 'SignUp',
  },
];
