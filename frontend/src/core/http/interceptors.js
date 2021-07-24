import Axios from 'axios';

Axios.interceptors.request.use((request) => {
	let token;

	if (token) {
		request.headers['Authorization'] = `Bearer ${token}`;
	}

	return request;
});

export default Axios;
