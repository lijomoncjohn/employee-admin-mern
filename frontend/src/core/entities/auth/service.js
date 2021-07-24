import { ApiWrapper } from '../../http/apiWrapper';
import Config from '../../ApiConfigs/config.json';
import { ApiMethods } from '../../base/constants';

export class Service extends ApiWrapper {
	static async login(values) {
		return this.sendRequest({
			url: `${Config.CONTROLLER_AUTH}/${Config.ACTION_TOKEN}`,
			method: ApiMethods.POST,
			data: values,
		});
	}
}
