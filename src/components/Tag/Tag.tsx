import classNames from 'classnames';
import React from 'react';

import './Tag.scss';
import { Props } from './typings';

const Tag: React.FC<Props> = ({
	children,
	clickable = false,
	isSelected,
	label,
	onClick,
}) => (
	<span
		className={classNames('tag', {
			'--clickable': clickable,
			'--selected': isSelected,
		})}
		onClick={onClick}
		role={clickable ? 'button' : 'status'}
	>
		{children || label}
	</span>
);

export default Tag;
