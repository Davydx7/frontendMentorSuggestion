import React from 'react';

export type Props = {
	// color: string;
	text: string | React.ReactNode;
	type?: 'primary' | 'secondary' | 'danger' | 'cancel';
	onClick?: () => void;
};
