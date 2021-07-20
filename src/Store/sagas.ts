import { all } from 'redux-saga/effects';
import { AdvertSagaWatcher } from './ducks/advert/advertSaga';
import { ProfileSagaWatcher } from './ducks/profile/profileSaga';

export default function* rootSaga() {
  yield all([AdvertSagaWatcher(), ProfileSagaWatcher()]);
}
