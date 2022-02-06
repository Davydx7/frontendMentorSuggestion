export type Props = {
	text?: string;
	type?: 'cancel' | 'danger' | 'primary' | 'secondary';
	onClick?: () => void;
};
