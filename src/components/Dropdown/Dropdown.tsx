import classNames from 'classnames';
import React, { useState } from 'react';
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
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);
	const [selected, setSelected] = useState<Option | undefined>(initialSelected);

	if (!options.length) {
		return <p>Please provide dropdown options</p>;
	}

	const handleSelect = (option: Option) => {
		onSelect(option);
		setSelected(option);

		if (closeOnSelect) {
			setIsOpen(false);
		}
	};

	return (
		<div className="dropdown">
			<OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
				<button
					className="dropdown__toggle-btn"
					onClick={() => setIsOpen((prevState) => !prevState)}
					type="button"
				>
					<span>{selected ? selected.label : placehoderText}</span>
					<img
						alt={`dropdown-is-${isOpen ? 'opened' : 'closed'}`}
						src={isOpen ? IconArrowDown : IconArrowUp}
					/>
				</button>
				{isOpen && (
					<ul className="dropdown__options">
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
									{isSelected && <img alt="selected" src={IconCheck} />}
								</li>
							);
						})}
					</ul>
				)}
			</OutsideClickHandler>
		</div>
	);
};

export default Dropdown;
