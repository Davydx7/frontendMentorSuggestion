import classNames from 'classnames';
import React, { useLayoutEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { Option, Props } from './typings';

import IconArrowDown from 'assets/shared/icon-arrow-down.svg';
import IconArrowUp from 'assets/shared/icon-arrow-up.svg';
import IconCheck from 'assets/shared/icon-check.svg';

import './Dropdown.scss';

const Dropdown: React.FC<Props> = ({
	closeOnSelect = false,
	isOpen: initialIsOpen = false,
	onSelect,
	options = [],
	placehoderText = 'Please select',
	selected: initialSelected,
	wrapperClassName,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);
	const [selected, setSelected] = useState<Option | undefined>(initialSelected);

	const dropdownMenuRef = useRef<HTMLUListElement | null>(null);

	useLayoutEffect(() => {
		if (dropdownMenuRef.current) {
			const $menuItems = dropdownMenuRef.current.querySelectorAll('li .label');
			const maxWidth = Array.from($menuItems).reduce(
				(curMaxWidth, $curItem) => Math.max(curMaxWidth, $curItem.getBoundingClientRect().width),
				0
			);

			const currentWidth = parseInt(dropdownMenuRef.current.style.width, 10);

			if (Number.isNaN(currentWidth)) {
				// padding-left padding-right, the padding-left of checkIcon, and the width of the checkIcon
				const width = parseInt(`${maxWidth + 80}`, 10);

				dropdownMenuRef.current.style.minWidth = `${width}px`;
			}
		}
	}, [isOpen, options]);

	if (!options.length) {
		return <p className="dropdown --error">Please provide dropdown options.</p>;
	}

	const handleSelect = (option: Option) => {
		onSelect(option);
		setSelected(option);

		if (closeOnSelect) {
			setIsOpen(false);
		}
	};

	return (
		<OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
			<div className={classNames('dropdown', wrapperClassName)}>
				<button
					className={classNames('dropdown__toggle-btn', {
						'--is-open': isOpen,
					})}
					onClick={() => setIsOpen((prevState) => !prevState)}
					type="button"
				>
					<span>{selected ? selected.label : placehoderText}</span>
					{isOpen ? <IconArrowUp /> : <IconArrowDown />}
				</button>
				<ul
					className={classNames('dropdown__options', {
						'--visible': isOpen,
					})}
					ref={dropdownMenuRef}
				>
					{options.map(({ label, value }) => {
						const isSelected = value === selected?.value;

						return (
							<li
								aria-label={value}
								className={classNames('dropdown__option', {
									'--selected': isSelected,
								})}
								key={value}
								onClick={() => {
									handleSelect({ label, value });
								}}
							>
								<div className="label">{label}</div>
								{isSelected && <IconCheck />}
							</li>
						);
					})}
				</ul>
			</div>
		</OutsideClickHandler>
	);
};

export default Dropdown;
