import { all } from 'redux-saga/effects';
import { AdvertSagaWatcher } from './ducks/advert/advertSaga';
import { SearchCarSagaWatcher } from './ducks/searchCar/searchCarSaga';
import { ProfileSagaWatcher } from './ducks/profile/profileSaga';
export default function* rootSaga() {
  yield all([AdvertSagaWatcher(), SearchCarSagaWatcher(), ProfileSagaWatcher()]);
}
