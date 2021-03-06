import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from './actionType';
import { initialEmpState } from './state';

const reducer = createReducer(initialEmpState, {
	// Get all employees detail
	[ActionType.FETCH_EMPLOYEE_LIST_BEGIN]: (state) => {
		state.emp.success = false;
		state.emp.message = null;
		state.emp.error = null;
	},
	[ActionType.FETCH_EMPLOYEE_LIST_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		if (data.data.success) {
			state.emp.success = true;
			state.emp.message = data.data.message || 'success';
			state.emp.error = null;
			state.emp.data = data.data.data;
		} else {
			state.emp.success = false;
			state.emp.message = data.data.message;
			state.emp.error = data.data.error;
		}
	},
	[ActionType.FETCH_EMPLOYEE_LIST_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.emp.success = false;
		state.emp.message = data.data.message;
		state.emp.error = data.data.error;
	},

	// Add new employee details
	[ActionType.ADD_EMPLOYEE_LIST_BEGIN]: (state) => {
		state.emp.success = false;
		state.emp.message = null;
		state.emp.error = null;
	},
	[ActionType.ADD_EMPLOYEE_LIST_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		if (data.data.success) {
			state.emp.success = true;
			state.emp.message = data.data.message || 'success';
			state.emp.error = null;
		} else {
			state.emp.success = false;
			state.emp.message = data.data.message;
			state.emp.error = data.data.error;
		}
	},
	[ActionType.ADD_EMPLOYEE_LIST_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.emp.success = false;
		state.emp.message = data.data.message;
		state.emp.error = data.data.error;
	},

	// Edit employee details
	[ActionType.UPDATE_EMPLOYEE_BEGIN]: (state) => {
		state.emp.success = false;
		state.emp.message = null;
		state.emp.error = null;
	},
	[ActionType.UPDATE_EMPLOYEE_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		if (data.data.success) {
			state.emp.success = true;
			state.emp.message = data.data.message || 'success';
			state.emp.error = null;
		} else {
			state.emp.success = false;
			state.emp.message = data.data.message;
			state.emp.error = data.data.error;
		}
	},
	[ActionType.UPDATE_EMPLOYEE_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.emp.success = false;
		state.emp.message = data.data.message;
		state.emp.error = data.data.error;
	},

	// Delete employee details
	[ActionType.DELETE_EMPLOYEE_BEGIN]: (state) => {
		state.emp.success = false;
		state.emp.message = null;
		state.emp.error = null;
	},
	[ActionType.DELETE_EMPLOYEE_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		if (data.data.success) {
			state.emp.success = true;
			state.emp.message = data.data.message || 'success';
			state.emp.error = null;
		} else {
			state.emp.success = false;
			state.emp.message = data.data.message;
			state.emp.error = data.data.error;
		}
	},
	[ActionType.DELETE_EMPLOYEE_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.emp.success = false;
		state.emp.message = data.data.message;
		state.emp.error = data.data.error;
	},

	// Search an employee
	[ActionType.SEARCH_EMPLOYEE_BEGIN]: (state) => {
		state.emp.success = false;
		state.emp.message = null;
		state.emp.error = null;
	},
	[ActionType.SEARCH_EMPLOYEE_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		if (data.data.success) {
			state.emp.success = true;
			state.emp.message = data.data.message || 'success';
			state.emp.error = null;
			state.emp.data = data.data.data;
		} else {
			state.emp.success = false;
			state.emp.message = data.data.message;
			state.emp.error = data.data.error;
		}
	},
	[ActionType.SEARCH_EMPLOYEE_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.emp.success = false;
		state.emp.message = data.data.message;
		state.emp.error = data.data.error;
	},
});

export default reducer;
