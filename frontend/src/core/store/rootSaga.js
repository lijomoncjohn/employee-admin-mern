import { all } from 'redux-saga/effects';
import { loginWatch, logoutWatch } from '../entities/auth/saga';
import { fetchAllEmpsWatch } from '../entities/employee/saga';

export default function* rootSaga() {
	yield all([loginWatch(), logoutWatch(), fetchAllEmpsWatch()]);
}
