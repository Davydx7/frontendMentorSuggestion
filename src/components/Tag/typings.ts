import React from 'react';

export type Props = {
	label?: 'All' | 'UI' | 'UX' | 'Enhancement' | 'Bug' | 'Feature';
	clickable: boolean;
	isSelected: boolean;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};
