import { ActionType } from './actionType';

export const EmpAction = {
	fetchAllEmpployees(token) {
		return {
			type: ActionType.FETCH_EMPLOYEE_LIST_BEGIN,
			token,
		};
	},
	create(values, token) {
		return {
			type: ActionType.ADD_EMPLOYEE_LIST_BEGIN,
			token,
			values,
		};
	},
	update(token, empId, values) {
		return {
			type: ActionType.UPDATE_EMPLOYEE_BEGIN,
			token,
			empId,
			values,
		};
	},
	delete(token, empId) {
		return {
			type: ActionType.DELETE_EMPLOYEE_BEGIN,
			token,
			empId,
		};
	},
	search(token, term) {
		return {
			type: ActionType.SEARCH_EMPLOYEE_BEGIN,
			token,
			term,
		};
	},
};
