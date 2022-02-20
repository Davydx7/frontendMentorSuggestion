import classNames from 'classnames';
import React, { useState } from 'react';

import './Tag.scss';
import { Props } from './typings';

const Tag: React.FC<Props> = ({
	children,
	clickable = false,
	isSelected = false,
	label,
	onClick,
}) => {
	const [selected, setSelected] = useState(isSelected);

	const handleClick = () => {
		onClick?.();
		setSelected(!selected);
	};

	return (
		<span
			className={classNames('tag', { '--clickable': clickable, '--selected': selected })}
			onClick={handleClick}
			role={clickable ? 'button' : 'status'}
		>
			{children || label}
		</span>
	);
};

export default Tag;
