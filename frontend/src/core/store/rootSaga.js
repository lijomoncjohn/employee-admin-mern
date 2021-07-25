import { all } from 'redux-saga/effects';
import { loginWatch } from '../entities/auth/saga';
import { fetchAllEmpsWatch } from '../entities/employee/saga';

export default function* rootSaga() {
	yield all([loginWatch(), fetchAllEmpsWatch()]);
}
