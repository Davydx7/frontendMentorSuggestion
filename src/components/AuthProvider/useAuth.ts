import { useContext } from 'react';

import { AUTH_CONEXT } from './AuthProvider';
import { UseAuth } from './typings';

const useAuth: UseAuth = () => {
	const context = useContext(AUTH_CONEXT);

	if (!context) {
		throw new Error(`Using useAuth outside of <AuthProvider />`);
	}

	return context;
};

export default useAuth;
