import { all } from 'redux-saga/effects';
import { AdvertSagaWatcher } from './ducks/advert/advertSaga';
import { SearchCarSagaWatcher } from './ducks/searchCar/searchCarSaga';
import { ProfileSagaWatcher } from './ducks/profile/profileSaga';
import { AuthSagaWatcher } from './ducks/auth/authSaga';
import { NewsSagaWatcher } from './ducks/news/newsSaga';
export default function* rootSaga() {
  yield all([
    AdvertSagaWatcher(),
    SearchCarSagaWatcher(),
    ProfileSagaWatcher(),
    AuthSagaWatcher(),
    NewsSagaWatcher(),
  ]);
}
