import { ActionType } from './actionType';

export const Action = {
	login(values) {
		return {
			type: ActionType.LOGIN_BEGIN,
			values,
		};
	},
};
