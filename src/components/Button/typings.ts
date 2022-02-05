export type Props = {
	text?: string;
	type?: 'cancel' | 'danger' | 'link' | 'primary' | 'secondary';
	to?: string;
	onClick?: () => void;
};
