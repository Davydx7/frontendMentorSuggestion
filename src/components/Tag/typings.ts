export type Props = {
	label?: 'All' | 'UI' | 'UX' | 'Enhancement' | 'Bug' | 'Feature';
	clickable: boolean;
	isSelected: boolean;
	onClick?: () => void;
};
