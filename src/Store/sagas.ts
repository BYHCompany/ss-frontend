import { all } from 'redux-saga/effects';
import { AdvertSagaWatcher } from './ducks/advert/advertSaga';

export default function* rootSaga() {
  yield all([AdvertSagaWatcher()]);
}
