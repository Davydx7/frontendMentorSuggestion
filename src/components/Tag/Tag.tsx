import classNames from 'classnames';
import React, { useState } from 'react';

import './Tag.scss';
import { Props } from './typings';

const Tag: React.FC<Props> = ({
	children,
	clickable = 'false',
	isSelected = false,
	label,
	onClick,
}) => {
	const [selected, setSelected] = useState(isSelected);

	const handleSelect = () => {
		if (onClick) onClick();
		setSelected((prevState) => !prevState);
	};

	return (
		<span
			className={classNames('tag', { '--clickable': clickable, '--selected': selected })}
			onClick={handleSelect}
			role={clickable ? 'button' : 'status'}
		>
			{children || label}
		</span>
	);
};

export default Tag;
