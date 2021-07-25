import { put, takeLatest } from 'redux-saga/effects';

import { ActionType } from './actionType';
import { Service } from './service';

const fetchAllEmpsSaga = function* (action) {
	const empResponse = yield Service.fetchAllEmployees(action.token);

	if (!empResponse.error) {
		yield put({
			type: ActionType.FETCH_EMPLOYEE_LIST_SUCCESS,
			data: empResponse.value,
		});
	} else {
		yield put({
			type: ActionType.FETCH_EMPLOYEE_LIST_FAILED,
			data: empResponse.value,
		});
	}
};

const fetchAllEmpsWatch = function* () {
	yield takeLatest(ActionType.FETCH_EMPLOYEE_LIST_BEGIN, fetchAllEmpsSaga);
};

export { fetchAllEmpsWatch };
