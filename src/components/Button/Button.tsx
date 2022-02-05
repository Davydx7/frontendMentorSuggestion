import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';
import { Props } from './typings';

import ArrowLeft from 'assets/shared/icon-arrow-left.svg';

const Button: React.FC<Props> = ({
	children,
	onClick,
	text = 'Button Text',
	to,
	type = 'primary',
}) => {
	if (type === 'link' && !to) {
		throw new Error('The to is required for a link type button');
	}

	return type === 'link'
		? (
			<Link className="btn btn--link" to={to!}>
				<img alt={text} src={ArrowLeft} />
				{children || <span>{text}</span>}
			</Link>
		)
		: (
			<button className={classNames('btn', `btn--${type}`)} onClick={onClick} type="button">
				{children || text}
			</button>
		);
};

export default Button;
