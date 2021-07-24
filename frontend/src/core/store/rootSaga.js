import { all } from 'redux-saga/effects';
import { loginWatch } from '../entities/auth/saga';

export default function* rootSaga() {
	yield all([loginWatch()]);
}
