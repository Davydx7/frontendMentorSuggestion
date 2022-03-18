export type Props = {
	label?: 'All' | 'UI' | 'UX' | 'Enhancement' | 'Bug' | 'Feature';
	clickable: boolean;
	isSelected: boolean;
	handleClick?: () => void;
};
