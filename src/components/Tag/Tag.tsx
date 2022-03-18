import classNames from 'classnames';
import React from 'react';

import './Tag.scss';
import { Props } from './typings';

const Tag: React.FC<Props> = ({
	children,
	clickable = false,
	handleClick,
	isSelected,
	label,
}) => (
	<span
		className={classNames('tag', { '--clickable': clickable, '--selected': isSelected })}
		onClick={handleClick}
		role={clickable ? 'button' : 'status'}
	>
		{children || label}
	</span>
);

export default Tag;
