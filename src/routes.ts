import { Profile } from './Pages';
import { AdvertPage } from './Pages/AdvertPage';
import { MainPage } from './Pages/MainPage';
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
  {
    path: '/signUp',
    component: SignUp,
    name: 'SignUp',
  },
];
