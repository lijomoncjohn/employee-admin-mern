import { all } from 'redux-saga/effects';
import { loginWatch, logoutWatch } from '../entities/auth/saga';
import {
	addEmpWatch,
	fetchAllEmpsWatch,
	updateEmpWatch,
} from '../entities/employee/saga';

export default function* rootSaga() {
	yield all([
		loginWatch(),
		logoutWatch(),
		fetchAllEmpsWatch(),
		addEmpWatch(),
		updateEmpWatch(),
	]);
}
