import { ApiWrapper } from '../../http/apiWrapper';
import Config from '../../ApiConfigs/config.json';
import { ApiMethods } from '../../base/constants';

export class Service extends ApiWrapper {
	static async fetchAllEmployees(token) {
		let queryParams;
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
	static async updateEmployee(token, empId, values) {
		return this.sendRequest({
			url: `${Config.CONTROLLER_EMP}/${empId}`,
			method: ApiMethods.PUT,
			token,
			data: values,
		});
	}
	static async deleteEmployee(token, empId) {
		return this.sendRequest({
			url: `${Config.CONTROLLER_EMP}/${empId}`,
			method: ApiMethods.DELETE,
			token,
		});
	}
}
