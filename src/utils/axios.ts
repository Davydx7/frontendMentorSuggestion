import axios from 'axios';
import qs from 'qs';

import { isDevMode } from './env';

const paramsSerializer = (params: Record<string, any>) =>
	qs.stringify({ query: params }, { encode: false });

axios.defaults.paramsSerializer = paramsSerializer;

axios.interceptors.request.use((conf) => {
	const { method, url } = conf;

	if (isDevMode) {
		// eslint-disable-next-line no-console
		console.info(method, url);
	}

	conf.url = `/api/${url}`;

	return conf;
});

axios.interceptors.response.use(
	(res) => res.data,
	(err) => Promise.reject(err)
);

export default axios;
