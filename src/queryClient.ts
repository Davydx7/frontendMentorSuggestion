import { QueryClient } from 'react-query';

const ONE_HOUR = 1 * 60 * 60 * 1000;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: ONE_HOUR,
			refetchOnWindowFocus: false,
			staleTime: ONE_HOUR,
		},
	},
});

export default queryClient;
