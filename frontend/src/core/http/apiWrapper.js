import Axios from 'axios';

import { ApiMethods, HTTP_HEADER } from '../base/constants';
import { Config } from '../ApiConfigs/config.json';

const BASE_URL = Config.BASE_URL;

export class ApiWrapper {
	static async sendRequest(options) {
		if (options.method === undefined) {
			options.method = ApiMethods.GET;
		}

		let axiosResult = null,
			result = null;

		let contextHeader = {};

		if (options.header) {
			contextHeader = options.header;
		}

		let axiosOptions = {
			headers: {
				[HTTP_HEADER.Authorization]: `Bearer ${options.token}`,
				[HTTP_HEADER.ContentType]: 'application/json',
				...contextHeader,
			},
		};

		try {
			const url = `${BASE_URL}/api/${options.url}`;

			switch (options.method) {
				case ApiMethods.POST:
					axiosResult = await Axios.post(url, options.data, axiosOptions);
					break;
				case ApiMethods.GET:
					axiosResult = await Axios.get(url, axiosOptions);
					break;
				case ApiMethods.PUT:
					axiosResult = await Axios.put(url, axiosOptions);
					break;
				case ApiMethods.DELETE:
					axiosResult = await Axios.delete(url, axiosOptions);
					break;
				default:
					break;
			}
			result = {
				value: axiosResult.data,
				statusCode: axiosResult.status,
				errors: '',
			};
		} catch (error) {
			result = {
				value: error.response?.data,
				statusCode: error.response?.status,
				error: error.message,
			};
		}
		return result;
	}
}
