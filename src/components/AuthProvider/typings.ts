export type AuthContext = {
	user?: User;
	setUser?: (user?: User) => void;
	isAuthed: boolean;
	setIsAuthed: (isAuthed: boolean) => void;
};

export type UseAuth = () => AuthContext | undefined;
