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
			const $menuItems = dropdownMenuRef.current.getElementsByTagName('li');
			const maxEleWidth = Array.from($menuItems).reduce(
				(maxWidth, $curItem) => Math.max(maxWidth, $curItem.getBoundingClientRect().width),
				0
			);

			dropdownMenuRef.current.style.minWidth = `${(maxEleWidth + 24).toFixed(0)}px`;
		}
	}, []);

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
					<img
						alt={`dropdown-is-${isOpen ? 'opened' : 'closed'}`}
						src={isOpen ? IconArrowUp : IconArrowDown}
					/>
				</button>
				<ul className="dropdown__options" ref={dropdownMenuRef}>
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
								{label}
								{isSelected && <img alt="selected" className="selected-icon" src={IconCheck} />}
							</li>
						);
					})}
				</ul>
			</div>
		</OutsideClickHandler>
	);
};

export default Dropdown;
