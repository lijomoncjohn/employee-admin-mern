import { ApiStatus } from '../../base/constants';

export const initialAuthState = {
	apiStatus: ApiStatus.LOADING,
	login: {
		success: false,
		message: null,
		data: {},
		error: {},
	},
	logout: {
		success: false,
		message: null,
		error: {},
	},
};
