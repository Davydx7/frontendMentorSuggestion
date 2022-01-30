export type Option = {
	label: string | React.ReactNode;
	value: string;
};

export type Props = {
	closeOnSelect?: boolean;
	isOpen?: boolean;
	onSelect: (option: Option) => void;
	options: Option[];
	placehoderText?: string;
	selected?: Option;
};
