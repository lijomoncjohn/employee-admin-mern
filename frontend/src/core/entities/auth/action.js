import { ActionType } from './actionType';

export const AuthAction = {
	login(values) {
		return {
			type: ActionType.LOGIN_BEGIN,
			values,
		};
	},
	logout(token) {
		return {
			type: ActionType.LOGOUT_BEGIN,
			token,
		};
	},
	resetAuth() {
		return {
			type: ActionType.RESET_AUTH,
		};
	},
};
