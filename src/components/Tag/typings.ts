export type Props = {
	label?: 'UI' | 'UX' | 'Enhancement' | 'Bug' | 'Feature';
	clickable: boolean;
	isSelected: boolean;
	handleClick?: () => void;
};
