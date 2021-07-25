import { ActionType } from './actionType';

export const EmpAction = {
	fetchAllEmpployees(token) {
		return {
			type: ActionType.FETCH_EMPLOYEE_LIST_BEGIN,
			token,
		};
	},
};
