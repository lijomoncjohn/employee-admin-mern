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

const addEmpSaga = function* (action) {
	const empAddResponse = yield Service.addNewEmployee(
		action.values,
		action.token
	);

	if (!empAddResponse.error) {
		yield put({
			type: ActionType.ADD_EMPLOYEE_LIST_SUCCESS,
			data: empAddResponse.value,
		});
	} else {
		yield put({
			type: ActionType.ADD_EMPLOYEE_LIST_FAILED,
			data: empAddResponse.value,
		});
	}
};

const addEmpWatch = function* () {
	yield takeLatest(ActionType.ADD_EMPLOYEE_LIST_BEGIN, addEmpSaga);
};

const updateEmpSaga = function* (action) {
	const empUpdateResponse = yield Service.updateEmployee(
		action.token,
		action.empId,
		action.values
	);

	if (!empUpdateResponse.error) {
		yield put({
			type: ActionType.UPDATE_EMPLOYEE_SUCCESS,
			data: empUpdateResponse.value,
		});
	} else {
		yield put({
			type: ActionType.UPDATE_EMPLOYEE_FAILED,
			data: empUpdateResponse.value,
		});
	}
};

const updateEmpWatch = function* () {
	yield takeLatest(ActionType.UPDATE_EMPLOYEE_BEGIN, updateEmpSaga);
};

export { fetchAllEmpsWatch, addEmpWatch, updateEmpWatch };
