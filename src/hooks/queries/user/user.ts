import { useMutation } from 'react-query';

import { UseAuthUser } from './typings';

import useAuth from 'components/AuthProvider/useAuth';
import { authenticate} from 'services/user/user';

export const useAuthUser: UseAuthUser = () => {
	const { setIsAuthed } = useAuth()!;

	return useMutation(authenticate, {
		onSuccess: (result) => setIsAuthed(!!result),
	});
};
