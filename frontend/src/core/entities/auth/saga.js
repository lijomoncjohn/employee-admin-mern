import { put, takeLatest } from 'redux-saga/effects';

import { ActionType } from './actionType';
import { Service } from './service';

const loginSaga = function* (action) {
	const loginResponse = yield Service.login(action.values);

	if (!loginResponse.error) {
		yield put({
			type: ActionType.LOGIN_SUCCESS,
			data: loginResponse.value,
		});
	} else {
		yield put({
			type: ActionType.LOGIN_FAILED,
			data: loginResponse.value,
		});
	}
};

const loginWatch = function* () {
	yield takeLatest(ActionType.LOGIN_BEGIN, loginSaga);
};

export { loginWatch };
