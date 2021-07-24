import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from './actionType';
import { initialAuthState } from './state';

const reducer = createReducer(initialAuthState, {
	[ActionType.LOGIN_BEGIN]: (state) => {
		state.login.success = false;
		state.login.message = null;
		state.login.error = null;
	},
	[ActionType.LOGIN_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		if (data.data.success) {
			state.login.success = true;
			state.login.message = data.data.message;
			state.login.error = null;
			state.login.data = data.data.data;
		} else {
			state.login.success = false;
			state.login.message = data.data.message;
			state.login.error = data.data.error;
		}
	},
	[ActionType.LOGIN_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.login.success = false;
		state.login.message = data.data.message;
		state.login.error = data.data.error;
	},
});

export default reducer;
