import { ApiWrapper } from '../../http/apiWrapper';
import Config from '../../ApiConfigs/config.json';
import { ApiMethods } from '../../base/constants';

export class Service extends ApiWrapper {
	static async fetchAllEmployees(token) {
		return this.sendRequest({
			url: `${Config.CONTROLLER_EMP}`,
			method: ApiMethods.GET,
			token,
		});
	}
	static async addNewEmployee(values, token) {
		return this.sendRequest({
			url: `${Config.CONTROLLER_EMP}`,
			method: ApiMethods.POST,
			token,
			data: values,
		});
	}
}
