import React, { createContext, useState } from 'react';

import { AuthContext } from './typings';


export const AUTH_CONEXT = createContext<AuthContext | undefined>(undefined);

const AuthProvider: React.FC = (props) => {
	const [user, setUser] = useState<User | undefined>();
	const [isAuthed, setIsAuthed] = useState<boolean>(false);

	const value = {
		isAuthed,
		setIsAuthed,
		setUser,
		user,
	};

	return <AUTH_CONEXT.Provider value={value} {...props} />;
};

export default AuthProvider;
