import { Profile, Settings } from './Pages/Profile';
import { AdvertPage } from './Pages/AdvertPage';
import { MainPage } from './Pages/MainPage';
import { About, Email, SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
import { AddAdvert, SuccessPage } from './Pages/AddAdvert';
import { SearchAdvertsPage } from './Pages/SearchAdvertsPage/SearchAdvertsPage/SearchAdvertsPage';
export interface Route {
  path: string;
  Component: any;
  name: string;
  isAuth?: boolean;
  exact?: boolean;
}

export const routes: Route[] = [
  {
    path: '/profile/:id/settings',
    Component: Settings,
    name: 'Profile settings',
  },
  {
    path: '/profile/:userID',
    Component: Profile,
    name: 'Profile',
  },
  {

    path: '/advertsPage/',
    Component: SearchAdvertsPage,
    name: 'Adverts Page',
  },
  {

    //TODO:
    //Change id => advertID
    path: '/advert/:id',
    Component: AdvertPage,
    name: 'AdvertPage',
  },
  {
    path: '/addAdvert/success',
    Component: SuccessPage,
    name: 'SuccessPage',
  },

  {
    path: '/addAdvert',
    Component: AddAdvert,
    name: 'AddAdvert',
    isAuth: false,
  },
  {
    path: '/',
    Component: MainPage,
    name: 'MainPage',
    exact: true,
  },
  {
    path: '/signUp/about',
    Component: About,
    name: 'About',
    isAuth: true,
  },
  {
    path: '/signUp/confirmEmail',
    Component: Email,
    name: 'confirmEmail',
    isAuth: true,
  },
  {
    path: '/signIn',
    Component: SignIn,
    name: 'SignIn',
    isAuth: true,
  },
  {
    path: '/signUp',
    Component: SignUp,
    name: 'SignUp',
    isAuth: true,
  },
];
